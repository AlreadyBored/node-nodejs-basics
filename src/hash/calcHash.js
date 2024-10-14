const fs = require('fs');
const crypto = require('crypto');

const calculateHash = (filePath) => {
  const hash = crypto.createHash('sha256');
  const stream = fs.createReadStream(filePath);

  stream.on('data', (chunk) => {
    hash.update(chunk);
  }).on('end', () => {
    console.log(`Hash: ${hash.digest('hex')}`);
  });
};

module.exports = { calculateHash };
