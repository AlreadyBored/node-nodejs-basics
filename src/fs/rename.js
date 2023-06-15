import * as fs from 'node:fs/promises';
import { resolve } from 'node:path';

import { getExistence, getDirPath } from './utils.js';
import { ERROR_MESSAGE, FOLDER_NAME } from './constants.js';


const SOURCE_FILE_NAME = 'wrongFilename.txt';
const TARGET_FILE_NAME = 'properFilename.md';

const dirPath = getDirPath(import.meta.url);

const sourceFilePath = resolve(dirPath, FOLDER_NAME, SOURCE_FILE_NAME);
const targetFilePath = resolve(dirPath, FOLDER_NAME, TARGET_FILE_NAME);

const rename = async () => {
    try {
        const isSourceFileExist = await getExistence.file(sourceFilePath);
        if (!isSourceFileExist) throw new Error(ERROR_MESSAGE);

        const isTargetFileExist = await getExistence.file(targetFilePath);
        if (isTargetFileExist) throw new Error(ERROR_MESSAGE);

        await fs.rename(sourceFilePath, targetFilePath);
    } catch (error) {
        console.error(error);
    }
};

await rename();
