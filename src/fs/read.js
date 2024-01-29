// implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
import { readFile } from 'node:fs/promises';

const read = async () => {
    try {
        const content = await readFile('./files/fileToRead.txt', { encoding: 'utf-8' })
        console.log(content)
    } catch {
        throw new Error('FS operation failed')
    }
};

await read();