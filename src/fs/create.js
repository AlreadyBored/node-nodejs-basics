import path from 'path';
import { fileURLToPath } from 'url';
import { promises } from 'node:fs';

const { access, writeFile } = promises;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  try {
    await access(file);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await writeFile(file, 'I am fresh and young');
    } else {
      console.error(err);
    }
  }
};

await create();
