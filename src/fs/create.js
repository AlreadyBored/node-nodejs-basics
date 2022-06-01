import {writeFile, access} from 'node:fs/promises';
import url from 'node:url';
import path from 'node:path';

export const create = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filename = 'fresh.txt';
    const content = 'I am fresh and young';
    const absoluteFilePath = path.join(__dirname, 'files', filename);
    const STATUS_SUCCESS = 0;
    const STATUS_FAILURE = 1;

    const accessResult = await access(absoluteFilePath).catch(err => err);

    if (!accessResult) {
        throw new Error('FS operation failed');
    }

    try {
        await writeFile(absoluteFilePath, content);
    } catch (e) {
        return STATUS_FAILURE;
    }

    return STATUS_SUCCESS;
};

create();