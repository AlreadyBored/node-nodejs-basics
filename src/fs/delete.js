import { access, rm } from 'node:fs/promises';

const remove = async () => {
  const path = './files/fileToRemove.txt';

  try {
    await access(path);
    await rm(path);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
