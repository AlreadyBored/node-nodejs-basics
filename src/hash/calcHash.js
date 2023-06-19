import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  try {
    const contents = await readFile(filePath, { encoding: 'utf8' });

    const hash = createHash('SHA256').update(contents).digest('hex');

    console.log(hash);
  } catch (err) {
    console.error(err);
  }
};

await calculateHash();
