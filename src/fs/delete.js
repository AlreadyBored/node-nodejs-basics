import {unlink} from 'node:fs/promises';
import url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const remove = async () => {
    try {
        await unlink(`${__dirname}/files/fileToRemove.txt`);
    }
    catch {
        throw new Error('FS operation failed');
    }
};

remove()