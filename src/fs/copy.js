import fs from 'fs/promises';
import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);

const copy = async () => {
    const srcDirectory = `${__dirname}/files`;

    try {
        await fs.cp(
            srcDirectory,
            `${__dirname}/files_copy`,
            { recursive: true, errorOnExist: true, force: false }
        );
    } catch (err) {
        if (err.code === 'ENOENT' || err.code === 'ERR_FS_CP_EEXIST') {
            throw new Error('FS operation failed');
        }

        throw new Error(err);
    }
};

copy();