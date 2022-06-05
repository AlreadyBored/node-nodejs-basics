import { readFile } from 'fs';
import { dirname, join } from 'path';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';

export const calculateHash = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const file = 'fileToCalculateHashFor.txt';
  const pathToFile = join(__dirname, 'files', file);

  readFile(pathToFile, 'utf-8', (err, data) => {
    if (err) throw err;
    const hash = createHash('sha256').update(data).digest('hex');
    console.log(hash);
  });
};

calculateHash();
