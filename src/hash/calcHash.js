import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  return new Promise((resolve, reject) => {
    const fileStream = createReadStream(filePath);
    const hash = createHash('sha256');

    fileStream.on('error', (error) => {
      reject(error);
    });

    hash.on('finish', () => {
      const fileHash = hash.digest('hex');
      console.log(fileHash);
      resolve();
    });

    fileStream.pipe(hash);
  });
};

await calculateHash();
