import { mkdir, readdir, copyFile, constants } from 'node:fs/promises';
import path from 'path';
import { __dirname } from './constants.js';

const folderPath = path.resolve(__dirname, 'files');
const folderCopyPath = path.resolve(__dirname, 'files_copy');

const copy = async () => {
  try {
    const files = await readdir(folderPath);

    await mkdir(folderCopyPath, {
      recursive: false,
    });

    for (const file of files) {
      const filePath = path.resolve(__dirname, 'files', file);
      const fileCopyPath = path.resolve(__dirname, 'files_copy', file);

      await copyFile(filePath, fileCopyPath, constants.COPYFILE_EXCL);
    }
  } catch (err) {
    if (err.code === 'ENOENT' || err.code === 'EEXIST') {
      throw new Error('FS operation failed');
    } else {
      console.error(err);
    }
  }
};

await copy();
