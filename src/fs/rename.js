import { rename as renameFs } from 'fs/promises';
import { join } from 'path';
import { getDirAndFilePath, isExist, FS_ERROR_MESSAGE } from '../helpers.js';

const { __dirname } = getDirAndFilePath(import.meta);

export const rename = async () => {
    const pathWrongFile = join(__dirname, 'files', 'wrongFilename.txt');
    const pathProperFile = join(__dirname, 'files', 'properFilename.md');

    const wrongFileIsExist = await isExist(pathWrongFile);
    const properFileIsExist = await isExist(pathProperFile);

    if (
        !wrongFileIsExist ||
        properFileIsExist
    ) {
        throw new Error(FS_ERROR_MESSAGE);
    }

    try {
        await renameFs(pathWrongFile, pathProperFile);
    } catch(err) {
        throw err;
    }
};

rename();