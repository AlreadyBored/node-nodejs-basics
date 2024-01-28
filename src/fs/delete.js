import { promises as fs } from 'fs';
import path from 'path';

const remove = async () => {
    const dirPath = path.join('src', 'fs', 'files');
    const filePath = path.join(dirPath, 'fileToRemove.txt');

    try {
        await fs.unlink(filePath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error("FS operation failed");
        } else {
            throw error;
        }
    }
};

await remove();