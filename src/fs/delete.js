import { access, unlink, constants } from 'node:fs/promises';
import { join } from 'node:path';

const remove = async () => {
    const fileToRemove = join('src', 'fs', 'files', 'fileToRemove.txt');

    try {
        await access(fileToRemove, constants.R_OK);
        await unlink(fileToRemove);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw new Error('FS operation failed');
        }
    }
};

await remove();