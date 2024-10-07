import { cp, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import { ErrorToShow } from './libs.js';

const FILE_NAME_TO_REMOVE = 'fileToRemove.txt';
const fileDirectory = join(import.meta.dirname, '/files');
const pathToRemove = join(fileDirectory, FILE_NAME_TO_REMOVE);

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