
import {pathExists} from '../../libs/fs/pathExists.js';
import path from 'node:path';
import { unlink } from 'fs/promises';
import {ERROR_MSG, FILES_PATH} from '../constants.js';

// const COPY_FOLDER_PATH = 'files_copy';
const FOLDER_URL = path.join(import.meta.dirname, FILES_PATH);

const remove = async () => {
    try {
        if(await pathExists(FOLDER_URL)) {
            unlink(path.join(import.meta.dirname, FILES_PATH, 'fileToRemove.txt'))
        }

    }
    catch (error) {
        console.log(error)
          throw new Error(ERROR_MSG);    
    }
};

await remove();