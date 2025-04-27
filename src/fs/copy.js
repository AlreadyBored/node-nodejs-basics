import { mkdir, cp } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const copy = async () => {

    try {
        const filePath = fileURLToPath(import.meta.url);
        const dirName = path.dirname(filePath);
        const sourceDir = path.join(dirName, 'files');
        const destDir = path.join(dirName, 'files_copy');
        await cp( sourceDir, destDir, {force: false, errorOnExist: true, recursive : true});

    } catch (error) {
        if(error.code === 'ERR_FS_CP_EEXIST'){
            throw new Error('FS operation failed');
        } else {
            throw error;
        }  
       console.log(`Error! ${error}`);
       
    } 
};

await copy();
