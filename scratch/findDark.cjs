const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  if (content.includes('bg-[#111111]')) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if ((lines[i].includes('text-black') || lines[i].includes('text-zinc-') || lines[i].includes('text-white')) && !lines[i].includes('bg-[#FFFF00]') && !lines[i].includes('import')) {
        console.log(`${file}:${i + 1}: ${lines[i].trim()}`);
      }
    }
  }
}
