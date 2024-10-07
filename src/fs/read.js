import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const file = path.join(__dirname, 'files','fileToRead.txt');
    if (!fs.existsSync(file)) {
        throw new Error('FS operation failed');
    }
    const content= fs.readFileSync(file, 'utf-8');
    console.log(content);
};

await read();