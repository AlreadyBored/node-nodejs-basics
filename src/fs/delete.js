import { existsSync } from 'fs';
import { unlink } from 'fs/promises';

export const remove = async () => {
  try {
    if (!existsSync('src/fs/files/fileToRemove.txt')) {
      throw new Error('FS operation failed');
    } else {
      await unlink('src/fs/files/fileToRemove.txt');
    }
  } catch (error) {
    console.log(error);
  }
};

remove();
