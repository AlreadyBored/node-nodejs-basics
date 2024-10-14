const fs = require('fs');

const readFileStream = (filePath) => {
  const readStream = fs.createReadStream(filePath, 'utf8');
  readStream.on('data', (chunk) => {
    console.log(chunk);
  }).on('error', () => {
    console.log('Operation failed');
  });
};

module.exports = { readFileStream };
