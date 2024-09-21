import { promises as fs } from 'fs';
import path from 'path';

import { getDirPath } from '../utils/getDirPath.js';
import { checkFileExists } from '../utils/checkFileExists.js';

const rename = async () => {
    try {
        const dirPath = getDirPath(import.meta.url);
        const oldPath = path.join(dirPath, 'files', 'wrongFilename.txt');
        const newPath = path.join(dirPath, 'files', 'properFilename.md');

        const isOldFileExists = await checkFileExists(oldPath);
        if (!isOldFileExists) {
            throw Error();
        }

        const isNewFileExists = await checkFileExists(newPath);
        if (isNewFileExists) {
            throw Error();
        }

        await fs.rename(oldPath, newPath);
    } catch {
        throw Error('FS operation failed');
    }
};

rename()
    .then(() => {
        console.info('Success');
    })
    .catch((err) => {
        console.error(err.message);
    });
