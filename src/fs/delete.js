import fs from 'node:fs';
import { resolve } from 'path';

const path = resolve('src', 'fs', 'files', 'fileToRemove.txt');

const remove = async () => {
    fs.unlink(path, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    })
};

await remove();