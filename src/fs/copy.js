import { promises as fs } from 'fs';
import { join } from 'path';
import { ERROR_MESSAGES, SUCCESSFULLY_MESSAGE, __DIR_NAME } from './constants.js';

const copy = async () => {
    const sourceFolder = join(__DIR_NAME, 'files');
    const destinationFolder = join(__DIR_NAME, 'files_copy');

    try {
        await fs.access(sourceFolder);

        try {
            await fs.access(destinationFolder);

            throw new Error(ERROR_MESSAGES);
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw new Error(ERROR_MESSAGES);
            }
        }

        await fs.mkdir(destinationFolder);

        const files = await fs.readdir(sourceFolder);

        await Promise.all(files.map(async (file) => {
            const sourcePath = join(sourceFolder, file);
            const destPath = join(destinationFolder, file);

            await fs.copyFile(sourcePath, destPath);
        }));

        console.log(`Copy ${SUCCESSFULLY_MESSAGE}`);
    } catch (error) {
        console.error(`${ERROR_MESSAGES}: ${error.message}`);
    }
};

await copy();