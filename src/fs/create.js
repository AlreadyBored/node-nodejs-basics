import fs from 'fs/promises';
import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);

const create = async () => {
    const directory = `${__dirname}/files/fresh.txt`;

    try {
        await fs.writeFile(directory, 'I am fresh and young', { flag: 'wx' });
    } catch (err) {
        if (err.code = 'EEXIST') {
            throw new Error('FS operation failed');
        }

        throw new Error(err);
    }
};

await create();