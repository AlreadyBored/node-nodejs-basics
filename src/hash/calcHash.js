import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
const calculateHash = async () => {
  const currenDir = fileURLToPath(import.meta.url);
  const fileName = path.join(path.dirname(currenDir), 'files', 'fileToCalculateHashFor.txt');
  const fileStream = fs.createReadStream(fileName);
  fileStream.on('data', (data) => {
    const hash = crypto.createHash('sha256').update(data).digest('hex');
    console.log(hash.toString());
  });
};

await calculateHash();
