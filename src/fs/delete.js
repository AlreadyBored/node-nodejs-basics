import { unlink } from 'node:fs';

const remove = async () => {
  function throwErr(msg){
    try {
      throw new Error(msg);
    } catch(e) {
      console.log(e);
    }
  }

  unlink('./fs/files/fileToRemove.txt', (err) => {
    if (err) throwErr('FS operation failed');
  });
};

await remove();