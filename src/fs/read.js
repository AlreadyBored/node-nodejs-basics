const fs = require('fs');
const path = require('path');

const readFile = (filePath) => {
  const stream = fs.createReadStream(filePath, 'utf8');
  stream.on('data', (chunk) => {
    console.log(chunk);
  }).on('error', () => {
    console.log('Operation failed');
  });
};

module.exports = { readFile };
