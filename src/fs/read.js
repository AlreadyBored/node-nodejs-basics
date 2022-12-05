import { readFile } from 'fs/promises';

export const read = async () => {
    let readingFile = null;

    try {
        readingFile = await readFile('./src/fs/files/fileToRead.txt', 'utf8');
        console.log(readingFile);

    } catch(err) {
        console.error(new Error('FS operation failed'));
    }
};

read();