import path from 'path';
import { fileURLToPath } from 'url';
import fsPromises from 'fs/promises';
import * as utils from './utils.js';

export const dirName = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(dirName, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await fsPromises.rm(sourcePath);
  } catch (error) {
    //console.log(error);
    throw Error(utils.fsErrorMsg);
  }
};

await remove();