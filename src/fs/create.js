import {writeFile} from 'node:fs';
import {resolve} from 'node:path';

const create = async () => {
    const filePath = resolve('src', 'fs', 'files', 'fresh.txt');
    const fileContent = 'I am fresh and young';

    writeFile(filePath, fileContent, {flag: 'ax'}, (err) => {
        if (err && err.code === 'EEXIST') throw new Error('FS operation failed');
    });
};

await create();