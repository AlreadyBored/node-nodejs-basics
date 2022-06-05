import { rm } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

class UserException {
  constructor(message) {
    this.message = message;
    this.name = 'Custom exception';
  }
}
export const remove = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const file = 'fileToRemove.txt';
  const pathToFile = path.join(__dirname, 'files', file);

  rm(pathToFile, (err) => {
    if (err) throw new UserException('FS operation failed');
    console.log(`File '${file}' removed...`);
  });
};

remove();
