import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
  const readable = fs.createReadStream('./files/fileToCalculateHashFor.txt', { encoding: 'utf8' });

  const hash = await new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    hash.once('finish', () => resolve(hash.read().toString('hex')));
    readable.pipe(hash);
  });

  console.log(hash);
};

await calculateHash();
