import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const filePath = path.resolve(
    __dirname,
    'files',
    'fileToCalculateHashFor.txt',
  );

  return new Promise((resolve, reject) => {
    const hash = createHash('sha256');
    const stream = createReadStream(filePath);

    stream.on('error', () => reject(new Error('FS operation failed')));

    stream.on('data', (chunk) => hash.update(chunk));

    stream.on('end', () => {
      console.log(hash.digest('hex'));
      resolve();
    });
  });
};

await calculateHash();
