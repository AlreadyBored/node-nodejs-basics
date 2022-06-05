import { opendir } from 'fs/promises';
import { join } from 'path';
import { getDirAndFilePath, isExist, FS_ERROR_MESSAGE } from '../helpers.js';

const { __dirname } = getDirAndFilePath(import.meta);

export const list = async () => {
    const pathDir = join(__dirname, 'files');

    const dirIsExist = await isExist(pathDir);

    if (!dirIsExist) {
        throw new Error(FS_ERROR_MESSAGE);
    }

    try {
        const files = await opendir(pathDir);
        for await (const file of files) {
            console.log(file.name);
        }
    } catch(err) {
        throw err;
    }
};

list();