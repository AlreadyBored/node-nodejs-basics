import { fileURLToPath } from 'url';
import * as fs from 'fs';
import path from 'path';

const remove = async () => {
  const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/fileToRemove.txt');

  fs.rm(filePath, function(err) {
    if (err) {
      throw new Error('FS operation failed');
    }
  });
};

await remove();
