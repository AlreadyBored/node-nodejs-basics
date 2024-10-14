const fs = require('fs');
const path = require('path');

const listFiles = (dir) => {
  fs.readdir(dir, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.log('Operation failed');
      return;
    }

    const sortedFiles = files.sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });

    console.log('| (index) | Name                     | Type       |');
    console.log('|---------|---------------------------|------------|');
    sortedFiles.forEach((file, index) => {
      const type = file.isDirectory() ? 'directory' : 'file';
      console.log(`| ${index.toString().padEnd(7)} | ${file.name.padEnd(27)} | ${type.padEnd(10)} |`);
    });
  });
};

module.exports = { listFiles };
