import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const remove = async () => {
  const currenDir = fileURLToPath(import.meta.url);
  const fileName = path.join(path.dirname(currenDir), 'files', 'fileToRemove.txt');
  fs.unlink(fileName, (err) => {
    if (err) throw new Error('FS operation failed');
  });
};

await remove();
