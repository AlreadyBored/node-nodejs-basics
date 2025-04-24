import { readFile } from 'node:fs/promises';

const PATH = './src/fs/files/fileToRead.txt';

const read = async () => {
    try {
        console.log(await readFile(PATH, { encoding: 'utf8' }));
    } catch (err) {
        console.log(err);
        throw new Error('FS operation failed');
    }
};

await read();