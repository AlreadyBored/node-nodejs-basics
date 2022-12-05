import { unlink } from 'node:fs/promises';

const remove = async () => {
    const path = './src/fs/files/fileToRemove.txt';

    try {
        await unlink(path);
    } catch {
        throw new Error('FS operation failed'); 
    }
};

await remove();