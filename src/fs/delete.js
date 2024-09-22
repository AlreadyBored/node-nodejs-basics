import { promises as fs } from 'fs';
import { join } from 'path';
import { ERROR_MESSAGES, SUCCESSFULLY_MESSAGE, __DIR_NAME } from './constants.js';

const remove = async () => {
    const filePath = join(__DIR_NAME, 'files', 'fileToRemove.txt');

    try {
        await fs.unlink(filePath);

        console.log(`Delete ${SUCCESSFULLY_MESSAGE}`);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error(ERROR_MESSAGES);
        }

        throw error;
    }
};

await remove();