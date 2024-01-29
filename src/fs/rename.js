import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rename = async () => {
  fs.readFile(__dirname + '/files/properFilename.md', 'utf8', (err, data) => {
    if (data) {
      throw 'FS operation failed';
    } else {
      fs.rename(
        __dirname + '/files/wrongFilename.txt',
        __dirname + '/files/properFilename.md',
        err => {
          if (err) {
            throw 'FS operation failed';
          }
        }
      );
    }
  });
};

await rename();
