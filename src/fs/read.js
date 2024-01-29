import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  fs.readFile(__dirname + '/files/fileToRead.txt', 'utf8', (err, data) => {
    if (err) {
      throw 'FS operation failed';
    } else {
      console.log(data);
    }
  });
};

await read();
