import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

export const filename = fileURLToPath(import.meta.url);
export const dirname = path.dirname(filename);

const remove = async () => {
    try {
        const fileToRemove = path.join(dirname, 'files', 'fileToRemove.txt');
        await fs.rm(fileToRemove);
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();