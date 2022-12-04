import fs from 'fs';
import { resolve } from 'path';

const path = resolve('src', 'fs', 'files', 'fileToRead.txt');

const read = async () => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            throw new Error('FS operation failed');
        }
        console.log(data);
    });
};

await read();