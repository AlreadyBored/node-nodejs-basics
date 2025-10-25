import path from 'node:path';
import fs from 'node:fs/promises';
import { getDirInfo } from '../utils/getDirInfo.js';

const { __dirname } = getDirInfo(import.meta.url);

const remove = async () => {
  const fileToRemovePath = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await fs.access(fileToRemovePath);
    await fs.unlink(fileToRemovePath);
  } catch (err) {
    throw new Error('FS operation failed'); 
  }
};

await remove();
