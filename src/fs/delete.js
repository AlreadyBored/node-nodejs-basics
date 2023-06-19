import { unlink } from 'node:fs/promises';
import path from 'path';
import { __dirname } from './constants.js';

const filePath = path.resolve(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await unlink(filePath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      console.error(err);
    }
  }
};

await remove();
