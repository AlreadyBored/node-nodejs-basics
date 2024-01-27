import { rm } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TARGET_FILE = join(__dirname, 'files', 'fileToRemove.txt')

const remove = async () => {
  try {
    await rm(TARGET_FILE);
    console.log('File removed successfully');
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove();
