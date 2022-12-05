import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const oldFileName = path.join(dirName, 'files', 'wrongFilename.txt');
const newFileName = path.join(dirName, 'files', 'properFilename.md');
const errorMsg = 'FS operation failed';

const rename = async () => {
  try {
    await fs.rename(oldFileName, newFileName, (err) => {
      if (err) throw new Error();
    });
    await fs.access(newFileName, (err) => {
      if (err) throw new Error();
    });
  } catch (err) {
    if (err.code === 'EEXIST') {
      throw new Error(errorMsg);
    }
  }
};

await rename();