import { rm } from 'node:fs/promises';

const remove = async () => {
  const targetFilePath = 'src/fs/files/fileToRemove.txt';

  try {
    await rm(targetFilePath);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }
};

await remove();
