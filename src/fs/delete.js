import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const removeFile = path.join(dirName, 'files', 'fileToRemove.txt');
const errorMsg = 'FS operation failed';

const remove = async () => {
  try {
    await fs.rm(removeFile, (err) => {
      if (err) throw new Error();
    });
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.error(Error(errorMsg));
    }
  }
};

await remove();
