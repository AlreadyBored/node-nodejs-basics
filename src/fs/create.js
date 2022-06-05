import { access, appendFile, existsSync } from 'fs';

export const create = async () => {
  try {
    access('src/fs/files/fresh.txt', (error) => {
      if (error) {
        appendFile(
          'src/fs/files/fresh.txt',
          'I am fresh and young',
          (error) => {
            if (error) throw new Error('Something went wrong');
          }
        );
      } else {
        throw new Error('FS operation failed');
      }
    });
  } catch (error) {
    console.log(error);
  }
};

create();
