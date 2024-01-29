import path from 'path';
import { fileURLToPath } from 'url';
import fsPromises from 'fs/promises';
import * as utils from './utils.js';

export const dirName = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(dirName, "files", "wrongFilename.txt");
const destinationPath = path.join(dirName, "files", "properFilename.md");

const rename = async () => {
  // abort operation if properFilename.md already exists
  try {
    await fsPromises.open(destinationPath);
    throw Error(utils.fsErrorMsg);
  } catch (error) {
    //console.log(error);
    if (error.message === utils.fsErrorMsg) {
      throw error; // rethrowing our custom error
    }
  }
  try {
    await fsPromises.rename(sourcePath, destinationPath);
  } catch (error) {
    //console.log(error);
    throw Error(utils.fsErrorMsg);
  }
};

await rename();