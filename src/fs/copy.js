import path from 'node:path';
import fs from 'node:fs'

const copy = async () => {

    const scrPath = path.resolve('src', 'fs', 'files');
    const dstPath = path.resolve('src', 'fs', 'files_copy');

    fs.cp(scrPath, dstPath, { force: false, errorOnExist: true, recursive: true }, (err) => {
        if (err) {
            console.log('FS operation failed');
            return;
        }
        console.log('The files has been copied!');
    });

};

await copy();