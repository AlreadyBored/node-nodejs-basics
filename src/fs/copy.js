import fsPromises from 'node:fs/promises';
import { getPath } from './utils.js';
import { resolve } from 'node:path';

const copy = async () => {
    const path = getPath(import.meta.url);
    const sourse = resolve(path, 'files');
    const dest = resolve(path, 'files_copy');
    try {
        await fsPromises.access(sourse);
        await fsPromises.mkdir(dest);
        (await fsPromises.readdir(sourse)).forEach(async (file) => {
            const sourseFile = resolve(sourse, file);
            const destFile = resolve(dest, file);
            await fsPromises.cp(sourseFile, destFile);
        });
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();
