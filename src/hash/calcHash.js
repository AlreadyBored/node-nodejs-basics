import crypto from 'crypto';
import fs from 'fs';

const calculateHash = async () => {
  fs.readFile('src/hash/files/fileToCalculateHashFor.txt', 'utf8', (err, data) => {
    const hash = crypto.createHash('sha256').update(data).digest('hex');
    console.log(hash);
  });
};

await calculateHash();