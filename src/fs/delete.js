import { unlink } from 'node:fs/promises';

export const remove = async () => {
    const errorMessage = 'FS operation failed';

    try {
        await unlink('./src/fs/files/fileToRemove.txt');
    } catch (error) {
        throw new Error(errorMessage);
    }
};

await remove();