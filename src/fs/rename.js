import * as fsPromises from 'fs/promises';
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  fs.stat(path.join(__dirname, 'files', 'wrongFilename.txt'), function (err) {
    if (err) {
      throw new Error('FS operation failed');
    }
  })

  fs.stat(path.join(__dirname, 'files', 'properFilename.md'), function (err) {
    if (err) {
      return;
    }
    throw new Error('FS operation failed');
  })

  await fsPromises.rename(path.join(__dirname, 'files', 'wrongFilename.txt'), path.join(__dirname, 'files', 'properFilename.md'));

};

await rename();
