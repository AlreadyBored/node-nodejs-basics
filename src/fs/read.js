import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { FOLDER_NAME, ERROR_MESSAGE } from './constants.js';
import { getDirPath, getExistence } from './utils.js';


const FILE_NAME = 'fileToRead.txt';

const dirPath = getDirPath(import.meta.url);
const targetFilePath = resolve(dirPath, FOLDER_NAME, FILE_NAME);

const read = async () => {
    try {
        const isFileExist = await getExistence.file(targetFilePath);
        if (!isFileExist) throw new Error(ERROR_MESSAGE);

        const content = await readFile(targetFilePath, { encoding: 'utf8' });

        console.log(content);
    } catch (error) {
        console.error(error);
    }
};

await read();
