import { rm } from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const pathToFile = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await rm(pathToFile);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();
