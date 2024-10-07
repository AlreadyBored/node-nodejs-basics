import { readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const srcFolder = join(__dirname, 'files');

const list = async () => {
    try {
        const files = await readdir(srcFolder);

        console.log(files);
        // files.forEach(file => console.log(file));
    } catch (err) {
        console.error('FS operation failed');
    }
};

await list();