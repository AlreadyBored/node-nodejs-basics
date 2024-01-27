import { fileURLToPath } from 'url';
import * as fs from 'fs';
import path from 'path';

const rename = async () => {
  const pathToFile = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/wrongFilename.txt');
  const newFile = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/properFilename.md');

  fs.exists(newFile, (exist) => {
    if (exist) {
      throw new Error("FS operation failed");
    } else {
      fs.rename(pathToFile, newFile, (err) => {
        if (err) {
          throw new Error("FS operation failed");
        }
      });
    }
  })
};

await rename();
