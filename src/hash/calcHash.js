import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const calculateHash = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const hash = createHash('sha256');
  const readStream = createReadStream(filePath);

  readStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  readStream.on('end', () => {
    const hashValue = hash.digest('hex');
    console.log(hashValue);
  });

  readStream.on('error', (error) => {
    console.error('Error reading the file:', error.message);
  });
};

await calculateHash();