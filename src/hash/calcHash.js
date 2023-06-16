import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
  const file = await readFile('src/hash/files/fileToCalculateHashFor.txt');
  console.log(createHash('sha256').update(file).digest('hex'))
};

await calculateHash();
