import { rename as renamePromises, access } from 'fs/promises';
import getPathToFile from '../utils/getPath.js';

const errorMes = 'FS operation failed';

const rename = async () => {
  const oldPath = getPathToFile('fs/files/fileToRead.txt');
  const newPath = getPathToFile('fs/files/properFilename.md');

  console.log(newPath.isFile());
  try {
    await access(newPath);
    throw new Error(errorMes);
  } catch (error) {
    try {
      if (error.message === errorMes) {
        throw new Error(error);
      }

      await renamePromises(oldPath, newPath);
    } catch (e) {
      throw new Error(errorMes);
    }
  }
};

await rename();
