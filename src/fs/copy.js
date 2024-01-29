// implement function that copies folder files files with all its content into folder files_copy at the same level (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
import { statfs, cp } from 'node:fs/promises'

const copy = async () => {
    try {
        await statfs('files');
    } catch (err) {
        throw new Error ('FS operation failed');
    }
  
    try {
        await cp('./files', './files_copy', {
            force: false,
            errorOnExist: true,
            recursive: true
        });
    } catch (err) {
        if (err.code == 'ERR_FS_CP_EEXIST') {
            throw new Error ('FS operation failed');
        }
    }
};

await copy();
