import { readdir } from 'node:fs/promises';

const list = async () => {
    const path = './src/fs/files/';

    try {
        const list = await readdir(path);
        console.log(list);
    } catch {
        throw new Error('FS operation failed'); 
    }
};

await list();