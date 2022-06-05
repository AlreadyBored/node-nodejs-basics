import { access, promises } from 'fs';
import { cp } from 'fs/promises';

export const copy = async () => {
  try {
    access('src/fs/files_copy', async (error) => {
      if (error) {
        await promises.mkdir('src/fs/files_copy', { recursive: true });
        await cp('src/fs/files', 'src/fs/files_copy', { recursive: true });
      } else {
        throw new Error('FS operation failed');
      }
    });
  } catch (error) {
    console.log(error);
  }
};

copy();
