import path from 'node:path';
import { readdir  } from 'fs/promises';
import { pathExists } from '../../libs/fs/pathExists.js';
import { ERROR_MSG, FILES_PATH } from '../constants.js';

const FOLDER_URL = path.join(import.meta.dirname, FILES_PATH);

const list = async () => {
     try {
             if(await pathExists(FOLDER_URL)) { 
                        const files = await readdir(FOLDER_URL)
                        files.map((filename) => console.log(filename))
                     }
    
        }
        catch (error) {
            console.log(error)
              throw new Error(ERROR_MSG);    
        }
};

await list();