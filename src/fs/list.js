import fsPromises from 'node:fs/promises';
import { resolve } from 'node:path';
import { getPath } from './utils.js';

const list = async () => {
    const path = resolve(getPath(import.meta.url), 'files');
    try {
        (await fsPromises.readdir(path)).forEach(file => console.log(file));
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();