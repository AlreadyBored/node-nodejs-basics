import { promises as fs } from 'fs';

const remove = async () => {
    try {
        await fs.unlink('./files/fileToRemove.txt');
        console.log('File deleted');
    } catch (err) {
        console.error('FS operation failed');
    }
};

await remove();