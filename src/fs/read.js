import {readFile} from 'node:fs';
import {resolve} from 'node:path';

const read = async () => {
    const filePath = resolve('src', 'fs', 'files', 'fileToRead.txt');

    readFile(filePath, 'utf8', (err, data) => {
        if (err && err.code === 'ENOENT') throw new Error('FS operation failed');

        console.log(data);
    })
};

await read();