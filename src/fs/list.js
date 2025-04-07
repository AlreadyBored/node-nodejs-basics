import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readdir } from 'node:fs/promises';

const list = async () => {
    const fileName = fileURLToPath(import.meta.url);
    const dirName = dirname(fileName);
    const path = join(dirName, 'files');
    try {
        const files = readdir(path, ()=> {});
        (await files).map((file) => {
            console.log(file);
        })
    } catch (error) {
        throw new Error('FS operation failed');
    }   
};

await list();
