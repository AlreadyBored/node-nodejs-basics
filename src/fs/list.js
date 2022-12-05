import * as fsPromises from 'fs/promises';
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  fs.stat(path.join(__dirname, 'files'), function (err) {
    if (err) {
      throw new Error('FS operation failed');
    }
  })

  const files = await fsPromises.readdir(path.join(__dirname, 'files'), { withFileTypes: true });
  for (let file of files) {
    if (file.isFile()) {
      console.log(file.name);
    }
  }
};

await list();
