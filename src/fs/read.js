import { readFile } from 'node:fs';
import { resolve } from 'node:path';

const read = async () => {
    const absoluteFilePath = await resolve('files', 'fileToRead.txt')
    await readFile(absoluteFilePath, 'utf8', (err, data) => {
        if(err){
            throw new Error('FS operation failed');
        };
        console.log(data);
    });
};

await read();