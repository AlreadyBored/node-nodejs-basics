import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdir } from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  try {
    const files = await readdir(join(__dirname, 'files'));
    console.log(files);
  } catch(e) {
    throw new Error ('FS operation failed');
  }
};

await list();
