import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const pathFile = path.join(dirName, 'files');
const errorMsg = 'FS operation failed';

const list = async () => {
  try {
    await fs.readdir(pathFile, (err, files) => {
      console.dir(files);
      if (err) throw new Error();
    });
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.error(Error(errorMsg));
    }
  }
};

await list();
