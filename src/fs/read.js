import { promises as fs } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const DIRNAME = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const fileToReadPath = join(DIRNAME, 'files', 'fileToRead.txt');

    try {
        await fs.access(fileToReadPath);
        const content = await fs.readFile(fileToReadPath, 'utf-8');

        console.log(content);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();
