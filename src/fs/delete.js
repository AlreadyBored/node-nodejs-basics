
import { unlink } from 'fs/promises';
import path from 'node:path';
import { pathExists } from '../../libs/fs/pathExists.js';
import { ERROR_MSG, FILES_PATH } from '../constants.js';

const FOLDER_URL = path.join(import.meta.dirname, FILES_PATH);
const FILE_NAME = 'fileToRemove.txt';

const remove = async () => {
    try {
        if(await pathExists(FOLDER_URL)) {
            unlink(path.join(import.meta.dirname, FILES_PATH, FILE_NAME))
        }

    }
    catch (error) {
        console.log(error)
          throw new Error(ERROR_MSG);    
    }
};

await remove();