import path from 'path';
import { fileURLToPath } from 'url';
import fsPromises from 'fs/promises';
import * as utils from './utils.js';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(dirName, "files");

const list = async () => {
  try {
    const files = await fsPromises.readdir(sourcePath, {recursive: true});
    for (const file of files) {
      //console.log(file);
      const itemPath = path.resolve(sourcePath, file);
      const itemStat = await fsPromises.stat(itemPath);
      if (itemStat.isFile()) {
        console.log(file);
      }
    }
  }
  catch (error) {
    throw Error(utils.fsErrorMsg);
  }
};

await list();