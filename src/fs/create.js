import { writeFile } from 'node:fs';
import { resolve } from 'node:path';

const create = async () => {
    const absoluteFilePath = await resolve('files', 'fresh.txt');
    const data = 'I am fresh and young';
    await writeFile(absoluteFilePath, data, {flag: 'wx'}, (err) => {
        if (err && err.code === 'EEXIST') {
            throw new Error('FS operation failed');
        };
        console.log('File created Successfully!');
    });
};

await create();