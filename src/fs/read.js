import { promises as fs } from 'fs';
import { join } from 'path';
import { ERROR_MESSAGES, __DIR_NAME } from './constants.js';

const read = async () => {
    const filePath = join(__DIR_NAME, 'files', 'fileToRead.txt');

    try {
        await fs.access(filePath);
        const content = await fs.readFile(filePath, 'utf-8');

        console.log(content);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error(ERROR_MESSAGES);
        } else {
            throw error;
        }
    }
};

await read();
