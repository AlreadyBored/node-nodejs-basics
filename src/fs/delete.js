/** delete.js - implement function that deletes file fileToRemove.txt (if there's no file fileToRemove.txt Error with message
 FS operation failed must be thrown)*/
import * as fs from 'fs/promises';
import { FsError } from './fs-error.js';

const remove = async () => {
    const path = 'src/fs/files/fileToRemove.txt';
    try {
        await fs.rm(path)
    } catch (e) {
        throw new FsError();
    }
};

await remove();
