const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../src');

const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace 'text-white' with 'text-black' if it appears on the same line as 'bg-[#FFFF00]'
  const lines = content.split('\n');
  let changed = false;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('bg-[#FFFF00]') && lines[i].includes('text-white')) {
      lines[i] = lines[i].replace(/text-white/g, 'text-black');
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log('Fixed yellow text in', filePath);
  }
};

const walk = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walk(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      replaceInFile(filePath);
    }
  }
};

walk(directoryPath);
