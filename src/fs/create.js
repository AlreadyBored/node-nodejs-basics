import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);

const create = async () => {
  const filePath = join(__dirname, 'files', 'fresh.txt');
  try {
    await fs.writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
  } catch (err) {
    if (err.code === 'EEXIST') {
      throw new Error('FS operation failed');
    } else {
      throw err;
    }
  }
};

await create();
