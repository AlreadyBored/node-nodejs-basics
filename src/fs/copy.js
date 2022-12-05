import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const pathFileCopy = path.join(dirName, 'files_copy');
const pathFiles = path.join(dirName, 'files');
const errorMsg = 'FS operation failed';

const copy = async () => {
  try {
    await fs.mkdir(pathFileCopy, (err) => {
      if (err) throw new Error();
    });

    await fs.readdir(pathFiles, (err, files) => {
      if (err) throw new Error();
      files.forEach((file) => {
        fs.copyFile(path.join(pathFiles, file), path.join(dist, file));
      });
    });
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.error(Error(errorMsg));
    }
  }
};

copy();
