import { readFile } from 'fs/promises';
import { createHmac } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const calculateHash = async () => {
    // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const file = await readFile(`${__dirname}/files/fileToCalculateHashFor.txt`)
  const hash = createHmac('sha256', file).digest('hex');
  console.log(hash);
};

await calculateHash();