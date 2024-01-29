import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  fs.writeFile(
    __dirname + '/files/fresh.txt',
    'I am fresh and young',
    { flag: 'wx' },
    err => {
      if (err) throw 'FS operation failed';
    }
  );
};

await create();
