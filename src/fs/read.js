import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const file = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt');
    try {
        const data = await readFile(file, { encoding: 'utf8' });
        console.log(data);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();
