import path from 'node:path';
import fs from 'node:fs'

const create = async () => {

    const pathFile = path.resolve('src', 'fs', 'files', 'fresh.txt');
    const dataFile = 'I am fresh and young';

    fs.writeFile(pathFile, dataFile, { flag: 'wx' }, (err) => {
        if (err) {
            console.log('FS operation failed');
            return;
        };
        console.log('The file has been saved!');
    });



};

await create();