import { promises as fs } from 'fs';
import path from 'path';

import { getDirPath } from '../utils/getDirPath.js';


const copy = async () => {
    try {
        const dirPath = getDirPath(import.meta.url);
        const srcPath = path.join(dirPath, 'files', '/');
        const destPath = path.join(dirPath, 'files_copy');
        await fs.cp(srcPath, destPath, { errorOnExist: true, recursive: true, force: false })
    } catch {
        throw Error('FS operation failed');
    }
};

copy()
    .then(() => {
        console.info('Success')
    })
    .catch((err) => {
        console.error(err.message);
    });
