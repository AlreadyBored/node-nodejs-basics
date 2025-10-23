import { rm } from 'node:fs';

const path = './fs/files/fileToRemove.txt';

const remove = async () => {
  rm(path, (err) => {
    if (err) {
      throw Error('FS operation failed');
    }
  })
};

await remove();
