import { open } from 'node:fs/promises';
import { ErrorToShow } from './libs.js';

const ErrorToShow = {
    'EEXIST':'FS operation failed'
};

const content = 'I am fresh and young';
const fileName = "fresh.txt"
const filePath = "src/fs/files/"
const fileForCreating = filePath.concat(fileName);

const create = async () => {
    let fileHandler;
    try {
        fileHandler = await open(fileForCreating, 'wx');
        await fileHandler.writeFile(content);
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