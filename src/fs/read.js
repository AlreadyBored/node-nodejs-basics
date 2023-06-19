import { readFile } from 'node:fs/promises';
import path from 'path';
import { __dirname } from './constants.js';

const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    console.log(await readFile(filePath, { encoding: 'utf8' }));
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      console.error(err);
    }
  }
};

await read();
