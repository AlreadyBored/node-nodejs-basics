import { writeFile } from 'fs/promises';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

export const create = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    try {
        const path = resolve(__dirname, 'files', 'fresh.txt');
        await writeFile(path, 'I am fresh and young', { flag: 'ax'});
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

create();