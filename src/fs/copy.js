import { existsSync, promises } from 'fs';
import { cp } from 'fs/promises';

export const copy = async () => {
  try {
    if (!existsSync('src/fs/files') || existsSync('src/fs/files_copy')) {
      throw new Error('FS operation failed');
    } else {
      await promises.mkdir('src/fs/files_copy', { recursive: true });
      await cp('src/fs/files', 'src/fs/files_copy', { recursive: true });
    }
  } catch (error) {
    console.log(error);
  }
};

copy();
