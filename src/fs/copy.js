import fs from 'fs/promises';
import path from 'path';
import { FsOperationFailed } from './errors.js';

const copy = async () => {
    const filesDirPath = path.resolve('src', 'fs', 'files');
    const filesDirCopyPath = path.resolve('src', 'fs', 'files_copy');
    let isFilesExist = true;
    let isCopied = true;

    try {
        await fs.stat(filesDirPath);
    } catch (error) {
        isFilesExist = false;
    }

    try {
        await fs.stat(filesDirCopyPath);
    } catch (error) {
        isCopied = false;
    }
    
    if (!isFilesExist || isCopied) {
        throw new FsOperationFailed();
    }
 
    try {
        await fs.cp(filesDirPath, filesDirCopyPath, {recursive: true});    
    } catch (error) {
        console.log(error)
    }
};

await copy();
