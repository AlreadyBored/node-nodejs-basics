// implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)
import { resolve } from 'node:path';
import { readdir } from 'node:fs/promises';
import { getDirName } from '../../utils/getDirName.js';

const list = async () => {
    const __dirname = getDirName(import.meta.url);
    const sourceFolderPath = resolve(__dirname, 'files');

    try {
        const filenames = await readdir(sourceFolderPath, { recursive: true });
        console.log('Content of "files" folder:');
        console.log(filenames);
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();