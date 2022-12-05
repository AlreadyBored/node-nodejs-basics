import * as fs from 'fs';
import * as crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const hash = crypto.createHash('sha256');
  await fs.readFile(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'), (err, data) => {
    hash.update(data);
    console.log(hash.digest('hex'));
  });
};

await calculateHash();
