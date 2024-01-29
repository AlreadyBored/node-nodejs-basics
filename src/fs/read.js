import { readFile } from 'fs/promises';

const read = async () => {
    const fileToRead = 'src/fs/files/fileToRead.txt';
    try {
        const file = await readFile(fileToRead, { encoding: 'utf8' });
        console.log(file)
    } catch(error) {
        console.error('FS operation failed');
    }

};

await read();