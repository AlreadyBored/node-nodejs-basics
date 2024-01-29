const fs = require('fs');
const crypto = require('crypto');

const calculateHash = async () => {
  const fileStream = fs.createReadStream(filePath);
  const hash = crypto.createHash('sha256');

  fileStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  fileStream.on('end', () => {
    const hashResult = hash.digest('hex');
    console.log(`SHA256 hash for ${filePath}: ${hashResult}`);
  });

  fileStream.on('error', (error) => {
    console.error(`Error reading file: ${error.message}`);
  });
};

const filePath = 'fileToCalculateHashFor.txt';

await calculateHash(filePath);