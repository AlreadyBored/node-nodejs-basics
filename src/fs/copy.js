import {pathExists} from '../../libs/fs/pathExists.js';
import path from 'node:path';
import { copyFile, readdir, mkdir } from 'fs/promises';
import {ERROR_MSG, FILES_PATH} from '../constants.js';

const COPY_FOLDER_PATH = 'files_copy';

const FOLDER_URL = path.join(import.meta.dirname, FILES_PATH);
const COPY_FOLDER_URL = path.join(import.meta.dirname, COPY_FOLDER_PATH);

const copy = async () => {
    try {
        if(!await pathExists(COPY_FOLDER_URL) || !(await pathExists(FOLDER_URL))){
            const [files] = await Promise.all(readdir(FOLDER_URL), mkdir(COPY_FOLDER_URL))
            const promises = files.map((filename) =>  
                copyFile(path.join(import.meta.dirname, FILES_PATH, filename), path.join(import.meta.dirname, COPY_FILES_PATH, filename)))
            await Promise.all(promises)
        }
    } catch (err) {
        console.log(err);
        throw new Error(ERROR_MSG);
    }
};

await copy();
