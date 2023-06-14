import fsPromises from 'node:fs/promises';
import { resolve } from 'node:path';
import { getPath } from './utils.js';

const create = async () => {
    const __dirname = getPath(import.meta.url);
    const path = resolve(__dirname, 'files', 'fresh.txt');
    try {
        await fsPromises.writeFile(path, 'I am fresh and young', { flag: 'wx' });
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();