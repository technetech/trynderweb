const fs = require('fs');
const path = require('path');

const replaceInFiles = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      replaceInFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let newContent = content.replace(/#FFFF00/g, '#FFBF00');
      // also replace lowercase if any
      newContent = newContent.replace(/#ffff00/g, '#FFBF00');
      if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log('Replaced yellow in', filePath);
      }
    }
  }
}

replaceInFiles(path.join(__dirname, '../src'));
replaceInFiles(path.join(__dirname, '..')); // for index.html
