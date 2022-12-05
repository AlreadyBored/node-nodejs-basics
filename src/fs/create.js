import { writeFile } from 'fs';
import { resolve } from 'path';

const create = async () => {
    const absolutePath = resolve('files', 'fresh.txt');
    const data = 'I am fresh and young';
    await writeFile(absolutePath, data, {flag: 'wx'}, (err) => {
        if (err && err.code === 'EEXIST') {
            throw new Error('FS operation failed');
        };
        console.log('File created Successfully!');
    });
};

await create();