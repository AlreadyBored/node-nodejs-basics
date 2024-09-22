import { promises as fs } from 'fs';
import { join } from 'path';
import { ERROR_MESSAGES, __DIR_NAME } from './constants.js';

const list = async () => {
    const folderPath = join(__DIR_NAME, 'files');

    try {
        await fs.access(folderPath);
        const files = await fs.readdir(folderPath);

        console.log('Files:', files);
    } catch (error) {
        throw new Error(ERROR_MESSAGES);
    }
};

await list();
