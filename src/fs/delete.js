import { rm } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const remove = async () => {
  const filename = fileURLToPath(import.meta.url);
  const fileToRemove = join(dirname(filename), 'files/fileToRemove.txt');

  try {
    await rm(fileToRemove);
  } catch {
    console.error(new Error('FS operation failed'));
  }
};

remove();
