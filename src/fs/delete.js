import fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
  const dir = dirname(fileURLToPath(import.meta.url));
  fs.unlink(`${dir}/files/fileToRemove.txt`, (err)=> {
    if(err) {
      throw new Error('FS operation failed');
    }
  });
};

await remove();
