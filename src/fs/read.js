import { readFile } from 'node:fs/promises';

const read = async () => {
    try {
        const file = await readFile('./files/fileToRead.txt', {
            encoding: 'utf8'
        });
        console.log(file);
    } catch {
        console.log(new Error('FS operation failed'));
    }
};

await read();
