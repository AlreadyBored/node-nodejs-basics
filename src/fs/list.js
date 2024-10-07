import { readdir } from 'node:fs/promises';
import { ErrorToShow } from './libs.js';
import { pathToFiles } from './envs.js';

const list = async () => {
    try {
        const files = await readdir(pathToFiles);
        console.log(files)
    } catch(error) {   
        let existingError = ErrorToShow[error.code];
        if (existingError) {
            throw new Error(existingError);
        }
        console.log(error)
    }
};

await list();