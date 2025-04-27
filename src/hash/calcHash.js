import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';

const calculateHash = async () => {
  const filePath = join('src', 'hash', 'files', 'fileToCalculateHashFor.txt');

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
  });
};

await calculateHash();
