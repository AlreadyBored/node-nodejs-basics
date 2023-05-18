import { unlink } from 'node:fs/promises';
import {dirname} from "../utils/dir.js";
const remove = async () => {
    try {
        const __dirname = dirname(import.meta.url);

        await unlink(`${__dirname}/files/fileToRemove.txt`);
    } catch (error) {console.log(error);
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }

        throw error;
    }
};

await remove();