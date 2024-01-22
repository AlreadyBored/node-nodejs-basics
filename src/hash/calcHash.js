import { createHash } from 'crypto';
import { promises as fsPromises } from 'fs';

const calculateHash = async () => {
  try {
    const fileContents = await fsPromises.readFile('./files/fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    const hex = hash.update(fileContents).digest('hex');
    console.log(hex);
  } catch (error) {
    console.error('FS operation failed');
  }
};

await calculateHash();
