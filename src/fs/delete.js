// implement function that deletes file fileToRemove.txt (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
import { rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const remove = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const fileToRemovePath = path.resolve(__dirname, 'files', 'fileToRemove.txt');
    try {
        await rm(fileToRemovePath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();