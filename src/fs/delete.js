import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rm } from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const destPath = join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await rm(destPath);
    console.log('fileToRemove.txt was deleted');
  } catch(e) {
    throw new Error ('FS operation failed');
  }
};

await remove();
