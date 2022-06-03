import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const list = async () => {
  const filename = fileURLToPath(import.meta.url);
  const currentPath = join(dirname(filename), 'files');

  try {
    const filesArray = await readdir(currentPath);
    console.log(filesArray);
  } catch {
    console.error(new Error('FS operation failed'));
  }
};

// list();
