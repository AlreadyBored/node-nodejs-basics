import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const file = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);

const calculateHash = async () => {
  const content = await readFile(file);
  const data = createHash('sha256').update(content);
  const hash = data.digest('hex');

  console.log(hash);
};

await calculateHash();
