import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const read = async () => {
  const currentDir = fileURLToPath(import.meta.url);
  const fileName = path.join(path.dirname(currentDir), 'files', 'fileToRead.txt');
  fs.readFile(fileName, { encoding: 'utf-8' }, (err, data) => {
    if (err) throw new Error('FS operation failed');
    else console.log(data);
  });
};

await read();
