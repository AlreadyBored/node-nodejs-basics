import {readdir} from 'node:fs/promises'
import url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const list = async () => {
    try {
        await readdir(`${__dirname}/files`).then(data => console.log(data));
    }
    catch {
        throw new Error('FS operation failed');
    }
};

list();