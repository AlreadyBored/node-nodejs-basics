import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rm } from 'node:fs/promises';

const remove = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const destPath = join(__dirname, 'files', 'fileToRemove.txt');

  try {
    await rm(destPath);
  } catch(e) {
    throw new Error ('FS operation failed');
  }
};

await remove();
