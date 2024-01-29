import path from 'path';
import { fileURLToPath } from 'url';
import fsPromises from 'fs/promises';
import * as utils from './utils.js';

const dirName = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(dirName, "files", "fileToRead.txt");

const read = async () => {
    try {
      const data = await fsPromises.readFile(sourcePath, {encoding: "utf8"});
      console.log(data);
    }
    catch (error) {
      throw Error(utils.fsErrorMsg);
    }
};

await read();