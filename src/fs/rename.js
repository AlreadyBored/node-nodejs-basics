import { rename as renameFail, access, constants } from 'node:fs/promises';
import path from 'path';
import { __dirname } from './constants.js';

const filePath = path.resolve(__dirname, 'files', 'wrongFilename.txt');
const newFilePath = path.resolve(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  const isFile = await access(newFilePath, constants.F_OK)
    .then(() => true)
    .catch(() => false);

  if (isFile) {
    throw new Error('FS operation failed');
  }

  try {
    await renameFail(filePath, newFilePath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      console.error(err);
    }
  }
};

await rename();
