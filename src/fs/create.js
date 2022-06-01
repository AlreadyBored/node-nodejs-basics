import { appendFile, existsSync } from 'fs';

export const create = async () => {
  try {
    if (existsSync('src/fs/files/fresh.txt')) {
      throw new Error('FS operation failed');
    } else {
      appendFile('src/fs/files/fresh.txt', 'I am fresh and young', (error) => {
        if (error) throw new Error('Something went wrong');
      });
    }
  } catch (error) {
    console.log(error);
  }
};

create();
