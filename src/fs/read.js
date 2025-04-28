import fs from 'node:fs/promises';
import path from 'node:path';

const read = async () => {
    try {
        const filePath = path.join('files', 'fileToRead.txt');

        const data = await fs.readFile(filePath, 'utf-8');

        console.log(data);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();