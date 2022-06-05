import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  const fileToReadPath = join(__dirname, 'files', 'fileToRead.txt');
  fs.readFile(fileToReadPath, (err, content) => {
    if (err) {
      throw new Error('FS operation failed');
    }
    console.log(content.toString());
  });
};

read();
