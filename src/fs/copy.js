import { cp } from 'node:fs/promises';
import { join } from 'node:path';
import { ErrorToShow } from './libs.js';

const directory = join(import.meta.dirname, '/files');
const directoryForCreating = join(import.meta.dirname, '/files_copy');

const copy = async () => {
    try {
        await cp(directory, directoryForCreating, 
            { errorOnExist: true, recursive: true, force: false}
        );
    } catch (error) {
        let existingError = ErrorToShow[error.code];
        if (existingError) {
            throw new Error(existingError);
        }
        console.log(error);
    }
};

await copy();
