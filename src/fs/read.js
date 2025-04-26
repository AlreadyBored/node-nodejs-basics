import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const targetDir = join(__dirname, 'files');
    const filePath = join(targetDir, 'fileToRead.txt');

    try {
        const result = await readFile(filePath);
        console.log(result);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();
