import fs from 'fs/promises';
import path from 'path';

const remove = async () => {
    const filePath = path.join('files', 'fileToRemove.txt');
    try {
        await fs.access(filePath);
        await fs.unlink(filePath);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await remove();