import {rm} from 'node:fs';
import {resolve} from 'node:path';

const remove = async () => {
    const filePath = resolve('src', 'fs', 'files', 'fileToRemove.txt');

    rm(filePath, (err) => {
        if (err && err.code === 'ENOENT') throw new Error('FS operation failed');
    })

};

await remove();