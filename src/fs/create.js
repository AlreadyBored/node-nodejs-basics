import path from 'path';
import { fileURLToPath } from 'url';
import { promises } from 'node:fs';

const { writeFile } = promises;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  try {
    await writeFile(file, 'I am fresh and young', { flag: 'wx' });
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.error('FS operation failed');
    } else {
      console.error(err);
    }
  }
};

await create();
