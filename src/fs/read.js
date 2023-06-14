import fsPromises from 'node:fs/promises';
import { resolve } from 'node:path';
import { getPath } from './utils.js';

const read = async () => {
    const file = resolve(getPath(import.meta.url), 'files', 'fileToRead.txt');
    try {
        const content = await fsPromises.readFile(file, 'utf-8');
        console.log(content);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();