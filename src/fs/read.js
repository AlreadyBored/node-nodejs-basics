import { promises as fs } from 'fs';
import { join } from 'path';

const read = async () => {
    const fileToReadPath = join('files', 'fileToRead.txt');

    try {
        await fs.access(fileToReadPath);
        const content = await fs.readFile(fileToReadPath, 'utf-8');

        console.log(content);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();
