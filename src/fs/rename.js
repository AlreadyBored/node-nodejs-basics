import fs from 'fs/promises';
import path from 'path';

const rename = async () => {
    const oldPath = path.join('files','wrongFilename.txt');
    const newPath = path.join('files','properFilename.md');

    try {
        await fs.access(oldPath);
        await fs.access(newPath);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code === 'ENOENT') {
            if (err.path === oldPath) {
                throw new Error('FS operation failed');
            } else {
                await fs.rename(oldPath, newPath);
            }
        } else {
            throw err;
        }
    }
};

await rename();