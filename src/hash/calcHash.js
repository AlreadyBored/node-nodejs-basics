import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const content = await readFile(filePath);
  const hash = createHash('sha256').update(content).digest('hex');
  console.log(hash);
};

await calculateHash();
