import fs from 'fs/promises';
import path from 'path';
import { FsOperationFailed } from './errors.js';

 const read = async () => {
    const filesPath = path.resolve('src', 'fs', 'files', 'fileToRead.txt');
    let isFilesDirExist = true;

    try {
        await fs.stat(filesPath);
    } catch (error) {
        isFilesDirExist = false;
    }

    if (!isFilesDirExist) {
        throw new FsOperationFailed();
    }
 
    try {
        const files = await fs.readdir(filesPath);    
        for (const file of files) {
            console.log(file)
        }
    } catch (error) {
        console.log(error)
    }
};

await read();