import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import path from 'path';

const calculateHash = async () => {
  const filePath = path.join('files', 'fileToCalculateHashFor.txt');

  try {
    const hash = createHash('sha256');
    const stream = createReadStream(filePath);

    stream.on('error', (err) => {
      throw new Error('FS operation failed');
    });

    stream.on('data', (chunk) => {
      hash.update(chunk);
    });

    stream.on('end', () => {
      const result = hash.digest('hex');
      console.log(result);
    });

  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await calculateHash();
