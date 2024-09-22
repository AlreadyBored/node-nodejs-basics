import { promises as fs } from 'fs';
import { join } from 'path';
import { ERROR_MESSAGES, SUCCESSFULLY_MESSAGE, __DIR_NAME } from './constants.js';

const rename = async () => {
    const wrongFilename = 'wrongFilename.txt';
    const properFilename = 'properFilename.md';

    const filePath = join(__DIR_NAME, 'files', wrongFilename);
    const properPath = join(__DIR_NAME, 'files', properFilename);

    try {
        await fs.access(filePath);

        try {
            await fs.access(properPath);

            throw new Error(ERROR_MESSAGES);
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw error;
            }
        }

        await fs.rename(filePath, properPath);

        console.log(`Rename ${SUCCESSFULLY_MESSAGE}`);
    } catch (error) {
        console.error(`${ERROR_MESSAGES}: ${error.message}`);
    }
};

await rename();