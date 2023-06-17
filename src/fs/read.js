import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FILE_PATH = path.join(__dirname, 'files', 'fileToRead.txt')

const read = async () => {
    try {
        const fileContent = await readFile(FILE_PATH, 'utf-8');
        console.log(fileContent);
    } catch {
        console.log('FS operation failed');
    }
};

await read();