// implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder (if file already exists Error with message FS operation failed must be thrown)
import { resolve } from 'node:path';
import { writeFile } from 'node:fs/promises';
import { getDirName } from '../../utils/getDirName.js';

const create = async () => {
    const __dirname = getDirName(import.meta.url);
    const createdFilePath = resolve(__dirname, 'files', 'fresh.txt');

    try {
        // wx flag - fails if file exists
        await writeFile(createdFilePath, 'I am fresh and young ', { flag: 'wx' });
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();