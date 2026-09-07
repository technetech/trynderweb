const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  const lines = content.split('\n');
  let changed = false;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('bg-white') && lines[i].includes('text-white')) {
      lines[i] = lines[i].replace(/bg-white/g, 'bg-transparent');
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(path.join(dir, file), lines.join('\n'), 'utf8');
    console.log('Fixed invisible text on white background in', file);
  }
}
