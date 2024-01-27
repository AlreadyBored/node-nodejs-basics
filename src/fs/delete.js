import fs from 'node:fs/promises';
import path from 'node:path';

const remove = async () => {
  const file = path.join(path.resolve(''), 'fs', 'files', 'fileToRemove.txt');
  fs.rm(file).catch(() => { throw new Error('FS operation failed') });
};

await remove();