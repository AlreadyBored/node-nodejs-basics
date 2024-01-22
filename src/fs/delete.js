import { rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(fileName);

const targetToDelete = join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await rm(targetToDelete);
    } catch (err) {
        console.error('FS operation failed');
    }
};

await remove();