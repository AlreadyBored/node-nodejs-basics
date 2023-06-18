import { rm } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { isExists } from '../utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  const fileNameToRemovePath = join(__dirname, 'files/fileToRemove.txt');

  if (!await isExists(fileNameToRemovePath)) {
    throw new Error('FS operation failed');
  }
  try {
    await rm(fileNameToRemovePath);
    console.log('File "fileToRemove.txt" has been removed');
  } catch (error) {
    console.log('🚀 ~ remove ~ error:', error);
  }
};

await remove();