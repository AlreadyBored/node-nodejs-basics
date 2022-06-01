import {rm} from 'node:fs/promises';
import url from 'node:url';
import path from 'node:path';

export const remove = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const subDir = 'files'
    const fileName = 'fileToRemove.txt';
    const absolutePath = path.join(__dirname, subDir, fileName);

    const STATUS_SUCCESS = 0;

    const rmResult = await rm(absolutePath).catch(err => err);

    if (rmResult instanceof Error) {
        throw new Error('FS operation failed');
    }

    return STATUS_SUCCESS;
};

remove();