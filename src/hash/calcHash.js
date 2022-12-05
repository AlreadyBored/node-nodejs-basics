import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
  try {
    const fileBuffer = await readFile('./files/fileToCalculateHashFor.txt');
    console.log('fileBuffer', fileBuffer);
    const hashSum = createHash('sha256');
    hashSum.update(fileBuffer);
    const hex = hashSum.digest('hex');
    console.log(hex);
  } catch (err) {
    console.error(err.message);
  }
};

await calculateHash();
