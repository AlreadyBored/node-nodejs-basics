import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const filename = fileURLToPath(import.meta.url);
  const dirname = path.join(path.dirname(filename), 'files', 'fresh.txt');

  fs.stat(dirname, function (err, data) {
    if (!err) {
      throw new Error('FS operation failed');
    } else fs.writeFile(dirname, 'I am fresh and young', () => {});
  });
};

await create();
