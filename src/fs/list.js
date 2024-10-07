import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
  const currenDir = fileURLToPath(import.meta.url);
  const destDir = path.join(path.dirname(currenDir), 'files');
  fs.stat(destDir, (err, data) => {
    if (err || !data.isDirectory()) throw new Error('FS operation failed');
    fs.readdir(destDir, (err, data) => {
      data.forEach((item) => {
        console.log(item);
      });
    });
  });
};

await list();
