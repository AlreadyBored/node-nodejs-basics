import fs from 'fs';
import { resolve } from 'path';

const path = resolve('src', 'fs', 'files');

const list = async () => {
    fs.readdir(path, (err, filenames) => {
        if (err) {
            throw new Error('FS operation failed');
        }
        filenames.forEach((filename) => {
            console.log(filename);
        });
    });
};

await list();