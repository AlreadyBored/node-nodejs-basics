import { access, readFile, constants } from 'node:fs/promises';
import { join } from 'node:path';

const read = async () => {
    const filePath = join('src', 'fs', 'files', 'fileToRead.txt');

    try {
        await access(filePath, constants.R_OK);
        const content = await readFile(filePath, 'utf-8');
        console.log(content);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw new Error('FS operation failed');
        }
    }
};

await read();