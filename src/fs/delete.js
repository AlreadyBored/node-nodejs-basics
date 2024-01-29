import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  fs.rm(__dirname + '/files/fileToRemove.txt', { recursive: true }, err => {
    if (err) {
      throw 'FS operation failed';
    }
  });
};

await remove();
