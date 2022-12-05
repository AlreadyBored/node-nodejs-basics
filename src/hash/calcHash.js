import fs from 'fs/promises';
import crypto from 'crypto';

const calculateHash = async () => {
  const fileBuffer = await fs.readFile('./src/hash/files/fileToCalculateHashFor.txt');
  const hash = crypto.createHash('sha256');
  hash.update(fileBuffer);
  console.log(hash.digest('hex'));
};

await calculateHash();