import { readdir, access, copyFile, mkdir, constants } from 'node:fs/promises';
import path from 'node:path';
import { checkFileExistsAsync } from '../utils/files.js';

const copy = async () => {
  const currentDirectory = process.cwd();
  const filesPath = path.join(currentDirectory, '/files');
  const filesCopyPath = path.join(currentDirectory, '/files_copy');

  if (!await checkFileExistsAsync(filesPath)) {
    throw new Error('FS operation failed');
  }

  if (await checkFileExistsAsync(filesCopyPath)) {
    throw new Error('FS operation failed');
  }

  try {
    await mkdir(filesCopyPath);
  } catch (err) {
    console.log('Cannot create the files_copy directory: ', err);
  }

  try {
    const files = await readdir(filesPath);
    for (const file of files) {
      const source = path.join(currentDirectory, '/files', file);
      const dest = path.join(currentDirectory, '/files_copy', file);
      await copyFile(source, dest);
    }
  } catch (err) {
    console.error('Error happened while copying files: ', err);
  }
};

await copy();
