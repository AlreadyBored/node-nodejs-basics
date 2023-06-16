import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const fileToHash = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  try {
    const fileContents = await readFile(fileToHash);
    const hash = createHash('sha256');
    const hashedFile = hash.update(fileContents).digest('hex');
    console.log(hashedFile);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await calculateHash();
