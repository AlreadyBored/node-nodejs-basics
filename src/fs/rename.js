import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rename = async () => {
  const wrongFileNamePath = join(__dirname, 'files', 'wrongFilename.txt');
  const properFilenamePath = join(__dirname, 'files', 'properFilename.md');
  const errorMessage = 'FS operation failed';

  fs.access(properFilenamePath, (err) => {
    if (!err) {
      throw new Error(errorMessage);
    }
    fs.access(wrongFileNamePath, (err) => {
      if (err) {
        throw new Error(errorMessage);
      }
      fs.rename(wrongFileNamePath, properFilenamePath, (err) => {
        if (err) {
          throw new Error(errorMessage);
        }
      });
    });
  });
};

rename();
