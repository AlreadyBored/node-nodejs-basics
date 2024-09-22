import { promises as fs } from 'fs';
import path from 'path';

import { getDirPath } from '../utils/getDirPath.js';


const remove = async () => {
    try {
        const dirPath = getDirPath(import.meta.url);
        const filePath = path.join(dirPath, 'files', 'fileToRemove.txt');
        await fs.rm(filePath)
    } catch {
        throw Error('FS operation failed');
    }
};

remove()
    .then(() => {
        console.info('Success');
    })
    .catch(err => {
        console.error(err.message);
    });
