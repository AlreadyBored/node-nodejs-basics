import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, 'files', 'fresh.txt');
const content = 'I am fresh and young';

const create = async () => {
  try {
    await fs.writeFile(pathToFile, content, { flag: 'wx' });
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await create();
