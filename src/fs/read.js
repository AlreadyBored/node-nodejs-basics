import { readFile, access } from 'fs';

export const read = async () => {
  try {
    access('src/fs/files/fileToRead.txt', (error) => {
      if (error) {
        throw new Error('FS operation failed');
      } else {
        readFile('src/fs/files/fileToRead.txt', 'utf8', (error, data) => {
          if (error) throw new Error('Something went wrong');
          console.log(data);
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

read();
