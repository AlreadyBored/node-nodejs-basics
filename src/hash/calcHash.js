import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const calculateHash = async () => {
  const filePath = join('src', 'hash', 'files', 'fileToCalculateHashFor.txt');

  try {
    const fileBuffer = await readFile(filePath);

    const hash = createHash('sha256');
    hash.update(fileBuffer);
    const hexHash = hash.digest('hex');
    console.log(`SHA256 Hash: ${hexHash}`);
  } catch (err) {

  }
};

await calculateHash();
