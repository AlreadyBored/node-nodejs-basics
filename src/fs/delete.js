import { rm } from 'node:fs/promises';
import path from 'node:path';
import { getDir } from './utils.js';

const remove = async () => {
  try {
    await rm(path.join(getDir(), 'files','fileToRemove.txt'));
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();