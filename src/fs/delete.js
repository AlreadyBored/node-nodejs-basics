import { promises } from 'fs';
import { join } from 'path';

const remove = async () => {
    const filePath = join(import.meta.dirname, 'files', 'fileToRemove.txt');

    try {
        await promises.access(filePath);
        await promises.unlink(filePath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();
