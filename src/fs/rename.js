import fs from 'node:fs/promises';
import path from 'node:path';

const rename = async () => {
  const fileFrom = path.join(path.resolve(''), 'fs', 'files', 'wrongFilename.txt');
  const fileTo = path.join(path.resolve(''), 'fs', 'files', 'properFilename.md');
  fs.access(fileFrom)
    .then(() => fs.rename(fileFrom, fileTo))
    .catch(() => {
      throw new Error('FS operation failed');
    });
};

await rename();