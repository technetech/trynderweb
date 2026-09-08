const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  let lines = content.split('\n');
  let changed = false;

  for (let i = 0; i < lines.length; i++) {
    if ((lines[i].includes('<section') || lines[i].includes('<footer')) && lines[i].includes('bg-white')) {
      lines[i] = lines[i].replace('bg-white', 'bg-transparent');
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(path.join(dir, file), lines.join('\n'), 'utf8');
    console.log('Made transparent:', file);
  }
}
