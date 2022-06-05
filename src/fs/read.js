import { readFile } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

class UserException {
  constructor(message) {
    this.message = message;
    this.name = 'Custom exception';
  }
}

export const read = async () => {
  const logSeparator = '-----------------------------------\n';
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const folder = 'files';
  const file = 'fileToRead.txt';
  const pathToFile = path.join(__dirname, folder, file);

  readFile(pathToFile, 'utf8', (err, data) => {
    if (err && err.code === 'ENOENT')
      console.log(`${logSeparator}File '${file}' does not exists...`);
    if (err) throw new UserException('FS operation failed');
    console.log(data);
  });
};

read();
