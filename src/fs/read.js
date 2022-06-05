import { readFile } from 'fs/promises';
import { join } from 'path';
import { getDirAndFilePath, isExist, FS_ERROR_MESSAGE } from '../helpers.js';

const { __dirname } = getDirAndFilePath(import.meta);

export const read = async () => {
    const pathFile = join(__dirname, 'files', 'fileToRead.txt');

    const fileIsExist = await isExist(pathFile);

    if (!fileIsExist) {
        throw new Error(FS_ERROR_MESSAGE);
    }

    try {
        const content = await readFile(pathFile, 'utf-8');
        console.log(content);
    } catch(err) {
        throw err;
    }
};

read();