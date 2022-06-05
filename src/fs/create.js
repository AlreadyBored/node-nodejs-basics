import { appendFile } from 'fs/promises';
import { join } from 'path';
import { getDirAndFilePath, isExist, FS_ERROR_MESSAGE } from '../helpers.js';

const { __dirname } = getDirAndFilePath(import.meta);

export const create = async () => {
    const text = 'I am fresh and young';
    const filePath = join(__dirname, 'files', 'fresh.txt');
    
    const fileIsExist = await isExist(filePath);

    if (fileIsExist) {
        throw new Error(FS_ERROR_MESSAGE);
    }

    try {
        await appendFile(filePath, text);
    } catch(err) {
        throw err;
    }
};

create();