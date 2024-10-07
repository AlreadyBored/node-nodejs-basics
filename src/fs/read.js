import { promises as fs } from 'fs';

const read = async () => {
    try {
        const content = await fs.readFile('./files/fileToRead.txt', 'utf8');
        console.log(content);
    } catch (err) {
        console.error('FS operation failed');
    }
};

await read();