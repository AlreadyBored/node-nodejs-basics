import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
  const filesDirPath = join(__dirname, 'files');
  fs.readdir(filesDirPath, (err, filesArr) => {
    if (err) {
      throw new Error('FS operation failed');
    }
    console.log(filesArr);
  });
};

list();
