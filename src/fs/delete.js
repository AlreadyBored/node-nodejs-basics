import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path';
import { existsSync } from 'node:fs'
import { rm } from 'node:fs/promises'

const remove = async () => {
    const errorMessage = 'FS operation failed';
    const fileToRemove = '/files/fileToRemove.txt';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const isFileExist = existsSync(`${__dirname}${fileToRemove}`);

    if (!isFileExist) {
        throw new Error(errorMessage);
    }

    try {
        await rm(`${__dirname}${fileToRemove}`);
    } catch (err) {
        throw new Error(errorMessage);
    }
};

await remove();