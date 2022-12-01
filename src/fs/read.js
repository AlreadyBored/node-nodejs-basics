import fs from 'fs/promises';
import { getDirname } from '../utils/index.js';

const __dirname = getDirname(import.meta.url);

const read = async () => {
    try {
        const content = await fs.readFile(
            `${__dirname}/files/fileToRead.txt`,
            { encoding: 'utf8' }
        );
        console.log(content);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }

        throw new Error(err);
    }
};

await read();