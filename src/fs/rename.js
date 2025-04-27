import { rename } from 'fs/promises';
import path from 'node:path';
import { pathExists } from '../../libs/fs/pathExists.js';
import { ERROR_MSG, FILES_PATH } from '../constants.js';


const WRONG_FILE_NAME = 'wrongFilename.txt';
const PROPER_FILE_NAME = 'properFilename.md';
const OLD_FILE_URL = path.join(import.meta.dirname, FILES_PATH, WRONG_FILE_NAME);
const NEW_FILE_URL = path.join(import.meta.dirname, FILES_PATH, PROPER_FILE_NAME);

const renameFunc = async () => {
    try {
        if(await pathExists(OLD_FILE_URL)) { 
                   await rename(OLD_FILE_URL, NEW_FILE_URL)
                }
           }
   catch (error) {
       console.log(error)
         throw new Error(ERROR_MSG);    
   } 
};

await renameFunc();
