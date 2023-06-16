import { readFile } from 'node:fs/promises';

const read = async () => {
    const errorMessage = 'FS operation failed';

    try {
        const contents = await readFile('./src/fs/files/fileToRead.txt', { encoding: 'utf8' });
        console.log(contents);

    } catch (error) {
        throw new Error(errorMessage);
    }
};

await read();