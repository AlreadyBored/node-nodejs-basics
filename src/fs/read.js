// implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const fileToReadPath = path.resolve(__dirname, 'files', 'fileToRead.txt');
    try {
        const content = await readFile(fileToReadPath, { encoding: 'utf-8' });
        console.log(content);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();