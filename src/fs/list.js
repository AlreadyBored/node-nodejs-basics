import { readdir } from 'fs/promises';
import { join } from 'path';

const list = async () => {
  const dirPath = join('src', 'fs', 'files');
  try {
    const files = await readdir(dirPath);
    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
