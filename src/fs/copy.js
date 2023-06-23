import fs from 'fs/promises';
import path from 'path';

const pathSrc = path.resolve('src', 'fs', 'files');
const pathDst = path.resolve('src', 'fs', 'files_copy');

const copy = async () => {
  // Write your code here
  try {
    await fs.cp(pathSrc, pathDst, {recursive: true, force: false, errorOnExist:true});
  }
  catch {
    throw new Error('FS operation failed');
  }
};

await copy();
