import {readdir} from 'node:fs/promises';
import url from 'node:url';
import path from 'node:path';

export const list = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const subDir = 'files'
    const absolutePath = path.join(__dirname, subDir);

    const STATUS_SUCCESS = 0;

    const listResult = await readdir(absolutePath).catch(err => err);

    if (listResult instanceof Error) {
        throw new Error('FS operation failed');
    }

    console.log(listResult);

    return STATUS_SUCCESS;
};

list();