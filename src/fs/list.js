import { readdir } from 'fs/promises';

const list = async () => {
    try {
        const path = './src/fs/files/';
        const files = await readdir(path);
        for (const file of files) console.log(file);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();