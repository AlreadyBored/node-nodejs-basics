import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
  try {
    const input = await readFile('./files/fileToCalculateHashFor.txt');
    console.log('input', input);
    const calculateHash = createHash('sha256');
    calculateHash.update(input);
    const hex = calculateHash.digest('hex');
    console.log('hex', hex);
  } catch (err) {
    console.error(err.message);
  }
};

await calculateHash();
