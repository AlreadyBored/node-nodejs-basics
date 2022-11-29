import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const getFullPath = (url, ...path) => join(dirname(fileURLToPath(url)), ...path);

export const catchError = (err) => {
    if (err) {
        throw err;
    }
}

export const catchFsError = (err) => err && throwFsError();

export const throwFsError = () => {
    throw new Error('FS operation failed');
}
