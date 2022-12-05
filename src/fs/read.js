import { readFile } from 'node:fs';
import { resolve } from 'path';

const read = async () => {
    const absolutePath = await resolve('files', 'fileToRead.txt')
    await readFile(absolutePath, 'utf8', (err, data) => {
        if(err){
            throw new Error('FS operation failed');
        };
        console.log(data);
    });
};

await read();