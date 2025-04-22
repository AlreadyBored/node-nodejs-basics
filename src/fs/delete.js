import fs from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await fs.access(fileToRemove, constants.F_OK);

        await fs.rm(fileToRemove);

    }  catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();