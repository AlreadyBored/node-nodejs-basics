import { readFile } from 'fs/promises';
import path from 'node:path';
import { pathExists } from '../../libs/fs/pathExists.js';
import { ERROR_MSG, FILES_PATH } from '../constants.js';


const FILE_NAME = 'fileToRead.txt';
const FILE_URL = path.join(import.meta.dirname, FILES_PATH , FILE_NAME);


const read = async () => {
    try {
                if(await pathExists(FILE_URL)) { 
                           const data = await readFile(FILE_URL, 'utf8')
                           console.log(data)
                        }
                   }
           catch (error) {
               console.log(error)
                 throw new Error(ERROR_MSG);    
           }
};

await read();