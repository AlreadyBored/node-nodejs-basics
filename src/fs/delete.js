import { rm } from 'fs/promises';
import path from 'path';
const __dirname = path.dirname(process.argv[1]);

export const remove = async () => {
    try {
        await rm(path.join(__dirname, '/files/fileToRemove.txt'))
    } catch {
        throw new Error('FS operation failed')
    }
};

// remove();