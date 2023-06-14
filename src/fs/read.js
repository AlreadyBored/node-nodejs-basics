import { readFile } from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const file = await readFile(filePath, 'utf8');
        console.log(file)
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();

