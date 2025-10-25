import fs from 'node:fs/promises';
import path from 'node:path';
import { checkFileExistsAsync } from '../utils/files.js';

const FILE_TO_REMOVE = 'fileToRemove.txt';

const remove = async () => {
  const currentDirectory = process.cwd();
  const fileToRemovePath = path.join(currentDirectory, '/files', FILE_TO_REMOVE);
  if (!await checkFileExistsAsync(fileToRemovePath)) {
    throw new Error('FS operation failed');
  }
  try {
    await fs.rm(fileToRemovePath);
  } catch (err) {
    console.log('Error on removing a file: ', err);
  }
};

await remove();
