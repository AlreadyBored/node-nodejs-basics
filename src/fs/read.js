import { readFile } from 'node:fs/promises';
const error = new Error('FS operation failed');

const read = async() => {
    try {
        const path = 'fs/files/fileToRead.txt';
        const contents = await readFile(path, { encoding: 'utf8' });
        console.log(contents);
    } catch (err) {
        console.error(error.message);
    }
};

await read();