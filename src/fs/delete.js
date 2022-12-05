import { rm } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const file = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRemove.txt');

    try {
        await rm(file);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();
