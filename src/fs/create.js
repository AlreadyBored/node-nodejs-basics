import { writeFile } from 'node:fs/promises';
import path from 'path';
import { __dirname } from './constants.js';

const filePath = path.resolve(__dirname, 'files', 'fresh.txt');

const create = async () => {
  try {
    await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
  } catch (err) {
    if (err.code === 'EEXIST') {
      throw new Error('FS operation failed');
    } else {
      console.error(err);
    }
  }
};

await create();
