import { unlink } from 'fs/promises';

const remove = async () => {
    try {
        const path = './src/fs/files/fileToRemove.txt';
        await unlink(path);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();