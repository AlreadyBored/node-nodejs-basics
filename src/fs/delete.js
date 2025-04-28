import fs from 'node:fs/promises';
import path from 'node:path';

const remove = async () => {
    try {
        const filePath = path.resolve( 'files', 'fileToRemove.txt');
        await fs.unlink(filePath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();
