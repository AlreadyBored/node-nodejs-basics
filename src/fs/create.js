import path from 'path';
import { fileURLToPath } from 'url';
import { promises } from 'node:fs';

const { writeFile } = promises;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  try {
    await writeFile(path.join(__dirname, 'files/fresh.txt'), 'I am fresh and young', { flag: 'wx' });
  } catch (err) {
    if (err.code === 'EEXIST') {
      throw new Error('FS operation failed');
    } else {
      throw err;
    }
  }
};

await create();
