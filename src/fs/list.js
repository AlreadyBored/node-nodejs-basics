import fs from 'fs/promises';
import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);

const list = async () => {
    const directory = `${__dirname}/files`;

    try {
        const files = await fs.readdir(directory);
        console.log(files);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }

        throw new Error(err);
    }
};

await list();