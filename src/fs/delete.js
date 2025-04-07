import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { rm } from 'node:fs/promises';

const remove = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const dirName = dirname(fileName);
    const path = join(dirName, 'files', 'fileToRemove.txt');
    try {
        await rm(path);
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();
