import fsPromises from 'node:fs/promises';
import { resolve } from 'node:path';
import { getPath } from './utils.js';

const rename = async () => {
    const path = getPath(import.meta.url);
    const sourse = resolve(path, 'files', 'wrongFilename.txt');
    const dest = resolve(path, 'files', 'properFilename.md');
    try { await fsPromises.rename(sourse, dest); } catch {
        throw new Error('FS operation failed');
    }
};

await rename();