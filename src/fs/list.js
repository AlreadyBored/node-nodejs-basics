import { readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
    const targetDir = join(__dirname, 'files');

    try {
        const result = await readdir(targetDir);
        console.log(result);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();
