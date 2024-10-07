import path from 'node:path';
import fs from 'node:fs'

const list = async () => {

    const readDir = path.resolve('src', 'fs', 'files');

    fs.readdir(readDir, (err, files) => {
        if (err) {
            console.log('FS operation failed');
            return;
        };
        files.forEach(element => {
            console.log(element);
        });

    });
};

await list();