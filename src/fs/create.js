import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async () => {
  const pathToTextFile = join(__dirname, 'files', 'fresh.txt')
  const operationFailedErrText = 'FS operation failed';
  fs.access(pathToTextFile, (err) => {
    if (!err) {
      throw Error(operationFailedErrText);
    }
    fs.writeFile(pathToTextFile, 'I am fresh and young', (err) => {
      if (err) {
        throw Error(operationFailedErrText);
      }
    });
  });
};

create();
