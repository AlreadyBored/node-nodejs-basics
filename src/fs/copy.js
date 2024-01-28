import { existsSync, cpSync } from 'fs';
const copy = async () => {
    const directoryWhatPath = './files';
    const directoryToPath = './files_copy';
    if (!existsSync(directoryWhatPath) || existsSync(directoryToPath)) {
      console.error("FS operation failed")
    } else {
      cpSync(directoryWhatPath, directoryToPath, {recursive: true});
    }
};

await copy();

/*
* copy.js - implement function that copies folder
* files with all its content into folder files_copy
*  at the same level (if files folder doesn't exists
*  or files_copy has already been created Error with
*  message FS operation failed must be thrown)
*
* */
