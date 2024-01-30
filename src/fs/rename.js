import { fileURLToPath } from 'url';
import * as fs from 'fs';
import path from 'path';

const rename = async () => {
  const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/wrongFilename.txt');
  const newFilePath = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/properFilename.md');

  fs.exists(newFilePath, (exist) => {
    if (exist) {
      throw new Error("FS operation failed");
    } else {
      fs.rename(filePath, newFilePath, (err) => {
        if (err) {
          throw new Error("FS operation failed");
        }
      });
    }
  })
};

await rename();
