import { writeFile } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const pathFile = path.join(dirname, 'files', 'fresh.txt');
const text = 'FS operation failed';
const error = 'FS operation failed';

const create = async () => {
  writeFile(pathFile, text, { flag: 'wx' }, (err) => {
    if (err) throw new Error(error);
  });
};

await create();
