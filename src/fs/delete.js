import { unlink } from 'node:fs/promises';

const PATH = './src/fs/files/fileToRemove.txt';

const remove = async () => {
    try {
        await unlink(PATH);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();