import fs from 'fs/promises';
import path from 'path';
import { FsOperationFailed } from './errors.js';

const remove = async () => {
    const toDeletePath = path.resolve('src', 'fs', 'files', 'fileToRemove.txt');
    let isFileExist = true;

    try {
        await fs.stat(toDeletePath);
    } catch (error) {
        isFileExist = false;
    }
    
    if (!isFileExist) {
        throw new FsOperationFailed();
    }
 
    try {
        await fs.rm(toDeletePath);    
    } catch (error) {
        console.log(error)
    }
};

await remove();