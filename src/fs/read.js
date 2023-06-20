import { readFile } from 'fs/promises';

const read = async () => {
    try {
        const path = './src/fs/files/fileToRead.txt';
        const content = await readFile(path);
        console.log(content.toString());
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();