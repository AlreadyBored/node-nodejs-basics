import { opendir } from 'node:fs/promises';
import { resolve } from 'node:path';

import { getDirPath, getExistence } from './utils.js';
import { ERROR_MESSAGE, FOLDER_NAME } from './constants.js';


const dirPath = getDirPath(import.meta.url);

const targetFolderPath = resolve(dirPath, FOLDER_NAME);

const list = async () => {
    try {
        const isTargetFolderExist = await getExistence.dir(targetFolderPath);
        if (!isTargetFolderExist) throw new Error(ERROR_MESSAGE);

        const targetDir = await opendir(targetFolderPath);

        for await (const { name: fileName } of targetDir) {
            console.log(fileName);
        }
    } catch (error) {
        console.error(error);
    }
};

await list();
