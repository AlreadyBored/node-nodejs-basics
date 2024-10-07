import { unlink } from 'node:fs/promises';
import { join } from 'node:path';
import { ErrorToShow } from './libs.js';
import { pathToFiles } from './envs.js';

const FILE_NAME_TO_REMOVE = 'fileToRemove.txt';
const pathToRemove = join(pathToFiles, FILE_NAME_TO_REMOVE);

const remove = async () => {
    try {
        await unlink(pathToRemove);
    } catch(error) {   
        let existingError = ErrorToShow[error.code];
        if (existingError) {
            throw new Error(existingError);
        }
        console.log(error)
    }
};

await remove();