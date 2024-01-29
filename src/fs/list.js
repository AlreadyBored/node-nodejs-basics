import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  fs.readdir(__dirname + '/files', (err, files) => {
    if (err) {
      throw 'FS operation failed';
    } else {
      files.map(el => console.log(el));
    }
  });
};

await list();
