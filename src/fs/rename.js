import fs from 'fs/promises';
import { existsSync } from 'fs';
import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);

const rename = async () => {
    const directory = `${__dirname}/files`;

    if (existsSync(`${directory}/properFilename.md`)) {
        throw new Error('FS operation failed');
    }

    try {
        await fs.rename(`${directory}/wrongFilename.txt`, `${directory}/properFilename.md`);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }

        throw new Error(err);
    }
};

await rename();