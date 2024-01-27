import fs from 'node:fs/promises';
import path from 'node:path';

const read = async () => {
  const file = path.join(path.resolve(''), 'fs', 'files', 'fileToRead.txt');
  fs.access(file)
    .then(
      () => {
        fs.readFile(file, { encoding: 'utf8' })
          .then((content) => console.log(content));     
      }
    )
    .catch(() => {
      throw new Error('FS operation failed');
    });
};

await read();