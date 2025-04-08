// implement function that deletes file fileToRemove.txt (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
import { resolve } from 'node:path';
import { rm } from 'node:fs/promises';
import { getDirName } from '../../utils/getDirName.js';

const remove = async () => {
    const __dirname = getDirName(import.meta.url);
    const fileToRemovePath = resolve(__dirname, 'files', 'fileToRemove.txt');

    try {
        await rm(fileToRemovePath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();