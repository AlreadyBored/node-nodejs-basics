import { rm } from 'fs/promises';
import { join } from 'path';
import { getDirAndFilePath, isExist, FS_ERROR_MESSAGE } from '../helpers.js';

const { __dirname } = getDirAndFilePath(import.meta);

export const remove = async () => {
    const pathFile = join(__dirname, 'files', 'fileToRemove.txt');

    const fileIsExist = await isExist(pathFile);

    if (!fileIsExist) {
        throw new Error(FS_ERROR_MESSAGE);
    }

    try {
        await rm(pathFile);
    } catch(err) {
        throw err;
    }
};

remove();