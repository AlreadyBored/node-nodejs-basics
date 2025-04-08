// implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
import { resolve } from 'node:path';
import { readFile } from 'node:fs/promises';
import { getDirName } from '../../utils/getDirName.js';

const read = async () => {
    const __dirname = getDirName(import.meta.url);
    const sourceFilePath = resolve(__dirname, 'files', 'fileToRead.txt');
    try {
        const content = await readFile(sourceFilePath, { encoding: 'utf-8' });
        console.log(content);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();