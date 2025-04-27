import { promises } from 'fs';
import { join } from 'path';

const read = async () => {
    const filePath = join(import.meta.dirname, 'files', 'fileToRead.txt');

    try {
        await promises.access(filePath);
        const content = await promises.readFile(filePath, 'utf-8');

        console.log(content);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();
