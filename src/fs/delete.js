import { rm } from 'fs/promises';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

export const remove = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    try {
        const path = resolve(__dirname, 'files', 'fileToRemove.txt');
        await rm(path);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

remove();