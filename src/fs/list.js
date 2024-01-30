import { fileURLToPath } from 'url';
import * as fs from 'fs';
import path from 'path';

const list = async () => {
  const folderPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files');

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      throw new Error('FS operation failed');
    }

    files.forEach(file => {
      console.log(file);
    });
  });
};

await list();
