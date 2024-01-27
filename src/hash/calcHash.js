import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
  const fileName = 'fileToCalculateHashFor.txt';
  const currentDir = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(currentDir, 'files', fileName);

  try {
    const stream = createReadStream(filePath);
    const hash = createHash('sha256');

    stream.on('data', (data) => {
      hash.update(data);
    });

    stream.on('end', () => {
      const hashResult = hash.digest('hex');
      console.log(`SHA256 hash for ${fileName}: ${hashResult}`);
    });
  } catch (error) {
    console.error('Error reading the file:', error.message);
  }
};

await calculateHash();