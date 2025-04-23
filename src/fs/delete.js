import { rm } from 'fs/promises';

const remove = async () => {
  try {
    await rm('./src/fs/files/fileToRemove.txt');
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
