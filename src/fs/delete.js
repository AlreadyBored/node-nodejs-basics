import { unlink } from 'fs/promises';
import { access } from 'fs/promises';

const remove = async () => {
  try {
    await access('./src/fs/files/fileToRemove.txt');
    await unlink('./src/fs/files/fileToRemove.txt');
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();
