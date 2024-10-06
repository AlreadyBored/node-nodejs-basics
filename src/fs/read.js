import { errorMessage, pathToFolder } from "../lib/fs/constants.js";
import {join} from 'path';
import {access, readFile} from 'fs/promises';

const fileNameForRead = 'fileToRead.txt';
const pathToFileForRead = join(pathToFolder(),fileNameForRead);

const read = async () => {
    try {
      const content =  await readFile(pathToFileForRead, {encoding: 'utf8'});
      console.log(content);
      
    } catch (err) {
        throw new Error(errorMessage);
    }
};

await read();