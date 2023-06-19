
import { readFile } from 'node:fs/promises';

const filePath = './files/fileToRead.txt';

const read = async (filePath) => {
    try {
        const contents = await readFile(filePath);
        console.log(contents);
    } catch (err) {
        console.error('FS operation failed');
    }
};

await read(filePath);