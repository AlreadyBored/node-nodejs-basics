import { rm } from 'node:fs/promises';

const remove = async () => {
  const file = 'src/fs/files/fileToRemove.txt';
  try {
    await rm(file);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove();