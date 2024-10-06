import fs from 'fs/promises';
import path from 'path';
import { FsOperationFailed } from './errors.js';

const rename = async () => {
    // Write your code here
    const beforeRenamePath = path.resolve('src', 'fs', 'files', 'wrongFilename.txt');
    const afterRenamePath = path.resolve('src', 'fs', 'files', 'properFilename.md');
    let isWrongFileExist = true;
    let isFileRenamed = true;

    try {
        await fs.stat(beforeRenamePath);
    } catch (error) {
        isWrongFileExist = false;
    }

    try {
        await fs.stat(afterRenamePath);
    } catch (error) {
        isFileRenamed = false;
    }
    
    if (!isWrongFileExist || isFileRenamed) {
        throw new FsOperationFailed();
    }
 
    try {
        await fs.rename(beforeRenamePath, afterRenamePath);    
    } catch (error) {
        console.log(error)
    }

};

await rename();