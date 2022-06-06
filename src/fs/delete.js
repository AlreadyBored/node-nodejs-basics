import path from 'path';
import { rm } from 'node:fs/promises';

export const remove = async () => {
    const dirname = path.resolve();

    const filePath = path.join(dirname, 'files', 'fileToRemove.txt');

    try {
        await rm(filePath);
    } catch {
        throw 'FS operation failed';
    }
};

remove();