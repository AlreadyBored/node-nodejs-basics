import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const currentDir = fileURLToPath(import.meta.url);
  const srcFile = path.join(path.dirname(currentDir), 'files', 'wrongFilename.txt');
  const destFile = path.join(path.dirname(currentDir), 'files', 'properFilename.md');
  fs.stat(srcFile, (err, data) => {
    if (err || !data.isFile()) throw new Error('FS operation failed');
    fs.stat(destFile, (err, data) => {
      if (!err && data.isFile()) throw new Error('FS operation failed');
      else
        fs.rename(srcFile, destFile, (err) => {
          if (err) throw new Error('FS operation failed');
        });
    });
  });
};

await rename();
