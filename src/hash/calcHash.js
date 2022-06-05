import crypto from 'crypto';
import { readFile } from 'node:fs/promises';

export const calculateHash = async () => {
  const fileBuffer = await readFile('./src/hash/files/fileToCalculateHashFor.txt');
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);
  const hex = hashSum.digest('hex');
  console.log(hex);
};

calculateHash();
