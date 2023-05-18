import {writeFile} from 'fs/promises';
import {dirname} from "../utils/dir.js";

const create = async () => {
    try {
        const __dirname = dirname(import.meta.url);

        await writeFile(`${__dirname}/files/fresh.txt`, 'I am fresh and young', { flag: 'wx' });
    } catch (error) {
        if (error.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }

        throw error;
    }
};

await create();