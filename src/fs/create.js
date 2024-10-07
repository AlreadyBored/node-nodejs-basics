import { open } from 'node:fs/promises';
import { join } from 'node:path';
import { ErrorToShow } from './libs.js';
import { pathToFiles } from './envs.js';

const FILE_CONTENT = 'I am fresh and young';
const FILE_NAME_TO_CREATE = "fresh.txt"
const fileForCreating = join(pathToFiles, FILE_NAME_TO_CREATE);

const create = async () => {
    let fileHandler;
    try {
        fileHandler = await open(fileForCreating, 'wx');
        await fileHandler.writeFile(FILE_CONTENT);
    } catch (error) {
        let existingError = ErrorToShow[error.code];
        if (existingError) {
            throw new Error(existingError);
        }
        console.log(error);
    } finally {
        fileHandler?.close();
    }
};

await create();