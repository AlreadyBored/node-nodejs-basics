import { writeFile } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  try {
    await writeFile(pathToFile, 'I am fresh and young', { flag: 'wx' });
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();
