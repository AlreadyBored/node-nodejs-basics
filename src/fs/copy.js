import path from 'path';
import { fileURLToPath } from 'url';
import { access, constants, mkdir, lstat, readdir, copyFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __folderFromPath = path.dirname(__filename) + '/files';
const __folderToPath = path.dirname(__filename) + '/files_copy';
const __errorMessage = 'FS operation failed';

const copy = async () => {
    try {
        const ifFolderExists = 
            await access(__folderToPath, constants.R_OK)
                .then(value => true)
                .catch(err => false)

        if(ifFolderExists){
            throw Error(__errorMessage);
        }else{
            await copyRecursive(__folderFromPath, __folderToPath);
        }
    }catch (e) {
        console.log(e.message);
    }
};

const copyRecursive = async(from, to) => {
    await mkdir(to);
    
    const files = await readdir(from);

    files.forEach(async(elem) => {
        const stats = await lstat(path.join(from, elem));
        if (stats.isFile()) {
            copyFile(path.join(from, elem), path.join(to, elem));
        } else {
            copyRecursive(path.join(from, elem), path.join(to, elem));
        }
    })
}

copy();
