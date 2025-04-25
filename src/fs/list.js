import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { readdir } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    const folderPath = join(__dirname, 'files');

    try {
        const files = await readdir(folderPath);
        console.log(files);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();