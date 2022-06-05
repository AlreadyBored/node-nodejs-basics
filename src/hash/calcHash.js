import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const calculateHash = async (file) => {
  const filePath = path.join(__dirname, 'files', file);

  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    const hash = crypto.createHash('sha256');
    hash.update(data);
    const hex = hash.digest('hex');
    console.log(hex);
  });
  
};

calculateHash('fileToCalculateHashFor.txt');