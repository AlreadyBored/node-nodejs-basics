import crypto from 'crypto';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
  fs.readFile(
    join(__dirname, 'files', 'fileToCalculateHashFor.txt'),
    (err, text) => {
      if (err) {
        throw new Error('FS operation failed');
      }
      const hash = crypto.createHash('sha256');
      hash.update(text);
      const hex = hash.digest('hex');
      console.log(hex);
    },
  );
};

calculateHash();
