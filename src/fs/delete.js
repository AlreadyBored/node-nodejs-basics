import fs from 'fs/promises';
import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);

const remove = async () => {
    const file = `${__dirname}/files/fileToRemove.txt`;

    try {
        await fs.unlink(file);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }

        throw new Error(err);
    }
};

await remove();