import { promises } from 'fs';
import { customError, getPath, isFileExists} from './fs-constants.js';

const oldFilePath = getPath(import.meta.url, 'wrongFilename.txt');
const newFilePath = getPath(import.meta.url, 'properFilename.md');

const rename = async () => {
  if (await isFileExists(newFilePath) || !(await isFileExists(oldFilePath))) {
    throw new Error(customError);
  } else {
    await promises.rename(oldFilePath, newFilePath);
  }
};

await rename();