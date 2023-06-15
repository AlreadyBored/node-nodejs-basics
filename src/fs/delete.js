import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';

import { FOLDER_NAME, ERROR_MESSAGE } from './constants.js';
import { getDirPath, getExistence } from './utils.js';


const FILE_NAME = 'fileToRemove.txt';

const dirPath = getDirPath(import.meta.url);

const absoluteFilePath = resolve(dirPath, FOLDER_NAME, FILE_NAME);

const remove = async () => {
    try {
        const isFileExist = await getExistence.file(absoluteFilePath);
        if (!isFileExist) throw new Error(ERROR_MESSAGE);

        await rm(absoluteFilePath);
    } catch (error) {
        console.error(error);
    }
};

await remove();
