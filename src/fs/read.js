import { readFile } from 'fs/promises';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    try {
        const path = resolve(__dirname, 'files', 'fileToRead.txt');
        const content = await readFile(path, { encoding: 'utf8'});
        console.log(content);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

read();