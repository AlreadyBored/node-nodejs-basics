import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { join } from 'path';

const calculateHash = async () => {
  const filePath = join('src', 'fs', 'files', 'fileToCalculateHashFor.txt');

  const hash = createHash('sha256');
  
  const fileStream = createReadStream(filePath);
  
  fileStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  fileStream.on('end', () => {
    const hexHash = hash.digest('hex');
    console.log(`SHA256 Hash: ${hexHash}`);
  });

  fileStream.on('error', (err) => {
    console.error('Error reading file:', err);
    throw new Error('FS operation failed');
  });
};

export { calculateHash };
