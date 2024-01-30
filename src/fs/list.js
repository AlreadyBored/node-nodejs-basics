import {readdir} from 'node:fs';
import {resolve} from 'node:path';

const list = async () => {
    const filesPath = resolve('src', 'fs', 'files');

    readdir(filesPath, (err, files) => {
        if (err && err.code === 'ENOENT') throw new Error('FS operation failed');

        console.log(files);
    })
};

await list();