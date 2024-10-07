import { cp, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import { ErrorToShow } from './libs.js';

const toRemoveName = 'fileToRemove.txt';
const fileDirectory = join(import.meta.dirname, '/files');
const pathToRemove = join(fileDirectory, toRemoveName);

const remove = async () => {
    try {
        await unlink(pathToRemove);
    } catch(error) {   
        console.log(error)
        let existingError = ErrorToShow[error.code];
        if (existingError) {
            throw new Error(existingError);
        }
        console.log(error)
    }
};

await remove();