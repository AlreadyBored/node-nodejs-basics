import { readFile } from 'fs/promises';
import { getDir } from '../utils.js';
import path from 'path';

const fileToRead = path.join(getDir(import.meta.url), 'files','fileToRead.txt');

const read = async () => {
    try {
        const res = await readFile(
            fileToRead,
            {
                encoding: 'utf-8',
            }
        );
        console.log(res);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();