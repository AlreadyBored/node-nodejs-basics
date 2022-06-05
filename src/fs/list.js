import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const list = async (dir) => {
  const dirPath = path.join(__dirname, dir);

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      console.log(`Files`, files);
    }
  })
};

list('files');