import { readdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    const dir = join(dirname(fileURLToPath(import.meta.url)), 'files');
    try {
        const files = await readdir(dir);
        for (const file of files) console.log(file);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();
