import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { readFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const filePath = join(__dirname, 'files', 'fileToRead.txt');

    try {
        const content = await readFile(filePath, 'utf8');
        console.log(content);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();