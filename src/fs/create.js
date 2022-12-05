import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const pathFile = path.join(dirname, 'files', 'fresh.txt');
const text = 'I am fresh and young';
const error_msg = 'FS operation failed';

const create = async () => {
  try {
    await fs.writeFile(pathFile, text, { flag: 'wx' }, (err) => {
      if (err) throw new Error();
    });
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.error(Error(error_msg));
    }
  }
};

await create();
