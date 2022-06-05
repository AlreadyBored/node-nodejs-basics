import { access, unlink } from 'fs/promises';

export const remove = async () => {
    try {
        await access('./files/');
    } catch {
        throw new Error('FS operation failed');
    }

    try {
        await access('./files/fileToRemove.txt');
        unlink('./files/fileToRemove.txt')
    } catch {
        throw new Error('FS operation failed');
    }
};
