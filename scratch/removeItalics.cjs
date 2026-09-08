const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  let changed = false;

  if (content.includes('italic')) {
    // Specifically target font-display headers
    // Replace 'italic' with '' in those lines
    // Also remove 'not-italic' 
    content = content.replace(/className="([^"]*)font-display([^"]*)italic([^"]*)"/g, 'className="$1font-display$2$3"');
    content = content.replace(/className="([^"]*)not-italic([^"]*)"/g, 'className="$1$2"');
    
    // Clean up double spaces that might be left
    content = content.replace(/className="([^"]*)  ([^"]*)"/g, 'className="$1 $2"');
    
    fs.writeFileSync(path.join(dir, file), content, 'utf8');
    console.log('Removed italic from:', file);
  }
}
