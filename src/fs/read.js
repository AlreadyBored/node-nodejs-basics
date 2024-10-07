import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const read = async () => {
    const readPath = path.join(dirname, 'files', 'fileToRead.txt');

    try {
        const text = await fs.readFile(readPath, 'utf8');

        console.log(text);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();
