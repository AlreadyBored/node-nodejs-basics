import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { FOLDER_NAME, ERROR_MESSAGE } from './constants.js';
import { getDirPath, getExistence } from './utils.js';


const FILE_NAME = 'fresh.txt';
const FILE_CONTENT = 'I am fresh and young';

const dirPath = getDirPath(import.meta.url);
const absoluteFilePath = resolve(dirPath, FOLDER_NAME, FILE_NAME);

const create = async () => {
    try {
        const isFileExist = await getExistence.file(absoluteFilePath);
        if (isFileExist) throw new Error(ERROR_MESSAGE);

        await writeFile(absoluteFilePath, FILE_CONTENT);
    } catch (error) {
        console.error(error);
    }
};

await create();
