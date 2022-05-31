import {readdir,writeFile} from 'node:fs/promises';
import url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const create = async () => {
    try {
        await readdir(`${__dirname}/files`).then(data => {
           if (data.includes('fresh.txt')) throw new Error('FS operation failed');
        })
        await writeFile(`${__dirname}/files/fresh.txt`, 'I am fresh and young');
    }
    catch {
        throw new Error('FS operation failed');
    }
};

create();