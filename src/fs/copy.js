import path from 'node:path';
import fs from 'node:fs/promises';
import { getDirInfo } from '../utils/getDirInfo.js';

const { __dirname } = getDirInfo(import.meta.url);

const copy = async () => {
  const sourcePath = path.join(__dirname, 'files');
  const destinationPath = path.join(__dirname, 'files_copy');

  try {
    await fs.access(sourcePath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed'); 
    } else {
      throw err;
    }
  }
    
  try {
    await fs.access(destinationPath);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.cp(sourcePath, destinationPath, { recursive: true });
    } else {
      throw err;
    }
  }
};

await copy();
