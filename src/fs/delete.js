import fsPromises from 'node:fs/promises';
import { resolve } from 'node:path';
import { getPath } from './utils.js';

const remove = async () => {
    const path = getPath(import.meta.url);
    const filePath = resolve(path, 'files', 'fileToRemove.txt');
    try {
        await fsPromises.unlink(filePath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();