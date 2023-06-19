import { readdir } from 'node:fs/promises';
import path from 'path';
import { __dirname } from './constants.js';

const folderPath = path.resolve(__dirname, 'files');

const list = async () => {
  try {
    console.log(await readdir(folderPath));
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      console.error(err);
    }
  }
};

await list();
