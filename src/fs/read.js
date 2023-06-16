import { readFile } from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        const content = await readFile(pathToFile, 'utf-8');
        console.log(content);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();