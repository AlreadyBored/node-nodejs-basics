// implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const list = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filesFolderPath = path.resolve(__dirname, 'files');
    try {
        const filenames = await readdir(filesFolderPath);
        console.log(filenames)
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();