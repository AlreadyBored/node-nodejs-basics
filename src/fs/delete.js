import { promises as fs } from 'fs';
import { join } from 'path';

const remove = async () => {
    const fileToRemovePath = join('files', 'fileToRemove.txt');

    try {
        await fs.access(fileToRemovePath);
        await fs.unlink(fileToRemovePath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();
