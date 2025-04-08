// implement function that copies folder files files with all its content into folder files_copy at the same level (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
import { resolve } from 'node:path';
import { cp } from 'node:fs/promises';
import { getDirName } from '../../utils/getDirName.js';

const copy = async () => {
    const __dirname = getDirName(import.meta.url);
    const sourceFolderPath = resolve(__dirname, 'files');
    const sestinationFolderPath = resolve(__dirname, 'files_copy');
  
    try {
        await cp(
            sourceFolderPath,
            sestinationFolderPath,
            {
                force: false, // doesn't allow to owerwrite dir
                errorOnExist: true, // throws error when destination dir exists
                recursive: true // copy all file/dir tree from source dir
            });
    } catch {
        throw new Error ('FS operation failed');
    }
};

await copy();
