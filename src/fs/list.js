import { readdir } from 'node:fs/promises';

const list = async () => {
    try {
        const files = await readdir('./files');
        console.log(files);
    } catch {
        console.log(new Error('FS operation failed'));
    }
};

await list();
