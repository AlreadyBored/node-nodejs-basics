import { promises as fs } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const DIRNAME = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
    const fileToRemovePath = join(DIRNAME, 'files', 'fileToRemove.txt');

    try {
        await fs.access(fileToRemovePath);
        await fs.unlink(fileToRemovePath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();
