import { readdir } from 'fs/promises';
import { customError, getPath } from './fs-constants.js';

const folderPath = getPath(import.meta.url);

const list = async () => {
  try {
    const fileNames = await readdir(folderPath);

    console.log(fileNames);
  } catch {
    throw new Error(customError);
  }

};

await list();