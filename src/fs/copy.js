import fs from 'fs/promises';
import { fileURLToPath } from 'url';

export const copy = async () => {
    // copy.js - implement function that copies folder files
    // files with all its content into folder files_copy
    // at the same level
    // (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)

    const TARGET_FOLDER_PATH = 'files';
    const COPY_FOLDER_PATH = 'files_copy';

    const path = (p) => fileURLToPath(new URL(p, import.meta.url));
    
    try {
        const files = await fs.readdir(path(`./${TARGET_FOLDER_PATH}`));

        await fs.mkdir(path(`./${COPY_FOLDER_PATH}`));

        await Promise.all(files.map(file => {
            fs.copyFile(path(`./${TARGET_FOLDER_PATH}/${file}`), path(`./${COPY_FOLDER_PATH}/${file}`));
        }));
    } catch (e) {        
        throw new Error('FS operation failed');
    }
};

copy();