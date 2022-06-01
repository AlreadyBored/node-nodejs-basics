import { existsSync, readdir } from 'fs';

export const list = async () => {
  try {
    if (!existsSync('src/fs/files')) {
      throw new Error('FS operation failed');
    } else {
      readdir('src/fs/files', (error, files) => {
        if (error) throw new Error('Something went wrong');

        console.log(files);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

list();
