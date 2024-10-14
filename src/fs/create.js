const fs = require('fs');
const path = require('path');

const createFile = (fileName) => {
  const filePath = path.join(process.cwd(), fileName);
  fs.writeFile(filePath, '', (err) => {
    if (err) console.log('Operation failed');
    else console.log(`${fileName} created successfully`);
  });
};

module.exports = { createFile };
