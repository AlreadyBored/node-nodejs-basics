import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

export const calculateHash = async () => {
  const data = await readFile(
    'src/hash/files/fileToCalculateHashFor.txt',
    'utf8'
  );
  const hash = createHash('sha256');

  const result = hash.update(data).digest('hex');

  console.log(result);
};

calculateHash();
