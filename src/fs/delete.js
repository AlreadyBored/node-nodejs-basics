import * as fsPromises from 'fs/promises';
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  fs.stat(path.join(__dirname, 'files', 'fileToRemove.txt'), function (err) {
    if (err) {
      throw new Error('FS operation failed');
    }
  })

  await fsPromises.unlink(path.join(__dirname, 'files', 'fileToRemove.txt'));
};

await remove();
