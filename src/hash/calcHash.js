import fs from 'fs';
import crypto  from 'crypto';
const calculateHash = async () => {

function calculateSHA256HashWithStreams(filePath) {
  const readStream = fs.createReadStream(filePath);
  const hash = crypto.createHash('sha256');

  readStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  readStream.on('end', () => {
    const fileHash = hash.digest('hex');
    console.log(`SHA256 Hash of the file: ${fileHash}`);
  });

  readStream.on('error', (error) => {
    console.error(`Error reading the file: ${error.message}`);
  });
}

calculateSHA256HashWithStreams('src/hash/files/fileToCalculateHashFor.txt');
};

await calculateHash();