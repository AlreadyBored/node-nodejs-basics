import { opendir, mkdir, copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import { getDirPath, getExistence } from './utils.js';
import { ERROR_MESSAGE, FOLDER_NAME } from './constants.js';


const NEW_FOLDER_NAME = `${FOLDER_NAME}_copy`;

const dirPath = getDirPath(import.meta.url);

const sourceFolderPath = resolve(dirPath, FOLDER_NAME);
const targetFolderPath = resolve(dirPath, NEW_FOLDER_NAME);

const copy = async () => {
    try {
        const isSourceFolderExist = await getExistence.dir(sourceFolderPath);
        if (!isSourceFolderExist) throw new Error(ERROR_MESSAGE);

        const isTargetFolderExist = await getExistence.dir(targetFolderPath);
        if (isTargetFolderExist) throw new Error(ERROR_MESSAGE);

        await mkdir(targetFolderPath);

        const sourceDir = await opendir(sourceFolderPath);

        for await (const { name: fileName } of sourceDir) {
            const sourceFilePath = resolve(sourceFolderPath, fileName);
            const targetFilePath = resolve(targetFolderPath, fileName);

            await copyFile(sourceFilePath, targetFilePath)
        }
    } catch (error) {
        console.error(error);
    }
};

await copy();
