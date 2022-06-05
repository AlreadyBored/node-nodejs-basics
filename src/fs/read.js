import path from "path";
import {fileURLToPath} from "url";
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const read = async () => {
  const file = path.join(__dirname, '/files/fileToRead.txt');

  if (!fs.existsSync(file)) {
    throw new Error('FS operation failed');
  }

  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      throw new Error('FS operation failed');
      return;
    }
    console.log(data)
  })
};

read();
