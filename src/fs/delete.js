import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import { rm, access, constants } from 'node:fs/promises'

const remove = async () => {
    const errorMessage = 'FS operation failed';
    const fileToRemove = '/files/fileToRemove.txt';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    try {
        await access(`${__dirname}${fileToRemove}`, constants.W_OK);
    } catch {
        throw new Error(errorMessage);
    }

    try {
        await rm(`${__dirname}${fileToRemove}`);
    } catch (err) {
        throw new Error(errorMessage);
    }
};

await remove();