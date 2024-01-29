import fs from 'node:fs/promises';
import path from 'node:path';

const __dirname = import.meta.dirname;
const text = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        console.log(await fs.readFile(text, { encoding: 'utf-8' }))
    } catch {
        throw new Error('FS operation failed')
    }
};

await read();