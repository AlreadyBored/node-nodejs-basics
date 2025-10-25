import path from 'node:path';
import fs from 'node:fs/promises';
import { getDirInfo } from '../utils/getDirInfo.js';

const { __dirname } = getDirInfo(import.meta.url);

const rename = async () => {
  const sourceFile = path.join(__dirname, 'files', 'wrongFilename.txt');
  const destinationFile = path.join(__dirname, 'files', 'properFilename.md');

  try {
    await fs.access(sourceFile);
  } catch (err) {
    throw new Error('FS operation failed'); 
  }

  try {
    await fs.access(destinationFile);
    throw new Error('FS operation failed'); 
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.rename(sourceFile, destinationFile);
    } else {
      throw err;
    }
  }

};

await rename();
