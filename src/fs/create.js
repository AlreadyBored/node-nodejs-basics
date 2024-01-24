import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const create = async () => {
  try {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileName = 'fresh.txt';
    const data = 'I am fresh and young';
    const newFile = writeFile(join(__dirname, 'files', fileName), data, { flag: 'wx' });

    await newFile;
  } catch (e) {
    throw new Error ('FS operation failed');
  }
};

await create();