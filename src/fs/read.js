import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const pathFile = path.join(dirName, 'files', 'fileToRead.txt');
const errorMsg = 'FS operation failed';

const read = async () => {
  try {
    await fs.readFile(pathFile, 'utf-8', (err, data) => {
      console.log(data);
      if (err) throw new Error();
    });
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.error(Error(errorMsg));
    }
  }
};

await read();
