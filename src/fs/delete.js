import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { unlink } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    const fileToRemove = join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await unlink(fileToRemove);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();