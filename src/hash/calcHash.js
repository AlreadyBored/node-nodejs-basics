import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const hash = createHash('sha256');
  const stream = fs.createReadStream(filePath);

  return new Promise((resolve, reject) => {
    stream.on('data', (data) => {
      hash.update(data);
    });

    stream.on('end', () => {
      const hashResult = hash.digest('hex');
      console.log(hashResult);
      resolve();
    });

    stream.on('error', (err) => {
      reject(err);
    });
  });
};

await calculateHash();
