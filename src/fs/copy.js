import { cp } from 'fs/promises';
import getPathToFile from '../utils/getPath.js';

const errorMes = 'FS operation failed';

const copy = async () => {
  try {
    const source = getPathToFile('fs/files');
    const destenition = getPathToFile('fs/files_copy');
    await cp(source, destenition, {
      recursive: true,
      errorOnExist: true,
    });
  } catch (error) {}
  throw new Error(errorMes);
};

await copy();
