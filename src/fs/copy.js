import fs from 'node:fs/promises';
import path from 'node:path';

const copy = async () => {
  const from = path.join(path.resolve(''), 'fs', 'files');
  const to = path.join(path.resolve(''), 'fs', 'files_copy');
  fs.cp(
    from,
    to,
    { recursive: true, force: false, errorOnExist: true }
  )
    .catch(() => {
      throw new Error('FS operation failed');  
    }); 
};

await copy();
