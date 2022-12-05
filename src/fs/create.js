import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const outputFile = fs.createWriteStream(path.join(__dirname, 'files', 'fresh.txt'));
  fs.access(path.join(__dirname, 'files', 'fresh.txt'), fs.F_OK, (err) => {
    if (err) {
      outputFile.write('I am fresh and young');
      return
    }
    throw new Error('FS operation failed');
  })
};

await create();
