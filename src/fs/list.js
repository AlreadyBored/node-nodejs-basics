import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readdir } from 'fs/promises';

export const list = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    try {
        const files = await readdir(resolve(__dirname, 'files'));
        console.log(files);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

list();