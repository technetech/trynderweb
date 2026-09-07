const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../src');
const rootPath = path.join(__dirname, '..');

const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');

  // We need to be careful with replacements so we don't double replace
  // e.g. text-white -> text-black -> text-white
  // Let's use temporary placeholders

  const replacements = [
    ['bg-black', 'bg-PLACEHOLDER_WHITE'],
    ['bg-white', 'bg-PLACEHOLDER_BLACK'],
    ['text-white', 'text-PLACEHOLDER_BLACK'],
    ['text-black', 'text-PLACEHOLDER_WHITE'],
    ['bg-zinc-900', 'bg-zinc-100'],
    ['bg-zinc-950', 'bg-zinc-50'],
    ['bg-zinc-800', 'bg-zinc-200'],
    ['border-zinc-800', 'border-zinc-200'],
    ['border-zinc-900', 'border-zinc-100'],
    ['text-zinc-400', 'text-zinc-600'],
    ['text-zinc-300', 'text-zinc-700'],
    ['text-zinc-500', 'text-zinc-500'],
    ['from-black', 'from-white'],
    ['to-black', 'to-white'],
    ['via-black', 'via-white'],
    ['from-zinc-900', 'from-zinc-100'],
    ['to-zinc-900', 'to-zinc-100'],
    ['from-zinc-950', 'from-zinc-50'],
    ['to-zinc-950', 'to-zinc-50'],
  ];

  let newContent = content;
  replacements.forEach(([from, to]) => {
    // Regex to match whole words for tailwind classes
    const regex = new RegExp(`(?<=[\\s"'\`>])${from}(?=[\\s"'\`<])`, 'g');
    newContent = newContent.replace(regex, to);
    
    // Also cover arbitrary values like bg-black/50 -> bg-white/50
    const regexOpacity = new RegExp(`(?<=[\\s"'\`>])${from}/`, 'g');
    newContent = newContent.replace(regexOpacity, to + '/');
  });

  // Now replace placeholders
  newContent = newContent.replace(/bg-PLACEHOLDER_WHITE/g, 'bg-white');
  newContent = newContent.replace(/bg-PLACEHOLDER_BLACK/g, 'bg-black');
  newContent = newContent.replace(/text-PLACEHOLDER_WHITE/g, 'text-white');
  newContent = newContent.replace(/text-PLACEHOLDER_BLACK/g, 'text-black');

  // For hex codes in index.css and index.html
  if (filePath.endsWith('.css') || filePath.endsWith('.html') || filePath.endsWith('.tsx')) {
    newContent = newContent.replace(/#000000/g, '#PLACEHOLDER_WHITE');
    newContent = newContent.replace(/#FFFFFF/g, '#PLACEHOLDER_BLACK');
    newContent = newContent.replace(/#PLACEHOLDER_WHITE/g, '#FFFFFF');
    newContent = newContent.replace(/#PLACEHOLDER_BLACK/g, '#000000');
  }

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Updated', filePath);
  }
};

const walk = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walk(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
      replaceInFile(filePath);
    }
  }
};

walk(directoryPath);
replaceInFile(path.join(rootPath, 'index.html'));
