const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  let newContent = '';
  
  let depth = 0;
  let inDarkBoxDepth = -1;

  // We can track depth by counting < and > and identifying tags, but JSX is tricky.
  // Let's use a simpler approach: replace strings in the whole file because almost all these components
  // are just the dark boxes themselves or have text-black explicitly for a reason.
  // Wait, if I replace all text-black with text-white, the light background text will disappear.
  
  // A regex-based approach for tracking JSX depth:
  const tokens = content.split(/(<[^>]+>)/);
  for (let token of tokens) {
    if (token.startsWith('<') && !token.startsWith('</') && !token.endsWith('/>')) {
      depth++;
      if (token.includes('bg-[#111111]') || token.includes('bg-[#161616]')) {
        if (inDarkBoxDepth === -1) {
          inDarkBoxDepth = depth;
        }
      }
    } else if (token.startsWith('</')) {
      if (inDarkBoxDepth !== -1 && depth === inDarkBoxDepth) {
        inDarkBoxDepth = -1;
      }
      depth--;
    } else if (token.endsWith('/>')) {
      // self closing, depth doesn't change
    }

    if (inDarkBoxDepth !== -1) {
      // We are inside a dark box.
      // Do not replace if it's inside bg-[#FFFF00] (but wait, that's in a tag string itself)
      // Actually, if a tag has bg-[#FFFF00], we should keep its text-black.
      // So let's only replace text-black if the token doesn't have bg-[#FFFF00].
      if (!token.includes('bg-[#FFFF00]')) {
         token = token.replace(/text-black/g, 'text-white');
      }
      // Replace text-zinc-* with text-white
      token = token.replace(/text-zinc-\d00/g, 'text-white');
      token = token.replace(/text-zinc-\d50/g, 'text-white');
    }
    
    newContent += token;
  }

  if (content !== newContent) {
    fs.writeFileSync(path.join(dir, file), newContent, 'utf8');
    console.log('Fixed dark boxes in', file);
  }
}
