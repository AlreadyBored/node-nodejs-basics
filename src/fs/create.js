import {open} from 'node:fs';
import fs from 'fs';
import path from 'path'
import {fileURLToPath} from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const create = async () => {
    const filePath = path.join(dirname, 'files', 'fresh.txt');

    open(filePath, 'wx', (err) => {
        if (err && err.code === 'EEXIST') {
            throw Error('FS operation failed')
        }

        fs.writeFile(filePath, 'I am fresh and young', function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
        });
    });
};

await create();