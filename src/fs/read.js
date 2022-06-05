import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async (file) => {
  const filePath = path.join(__dirname, 'files', file);
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      console.log(content);
    }
  })
};

read('fileToRead.txt');