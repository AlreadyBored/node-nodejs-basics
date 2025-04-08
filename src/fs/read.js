import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import {readFile} from 'node:fs/promises';

const read = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const dirName = dirname(fileName);
    const path = join(dirName, 'files', 'fileToRead.txt');

    try {
        const data = await readFile(path, 'utf8');
        console.log(data);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();
