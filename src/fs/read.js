import { readFile } from 'node:fs/promises';

const read = async () => {
    const path = './src/fs/files/fileToRead.txt';

    try {
        const content = await readFile(path, { encoding: 'utf8' });
        console.log(content);
    } catch {
        throw new Error('FS operation failed'); 
    }
};

await read();