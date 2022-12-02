import { readdir } from 'node:fs/promises';
const DIRECTORY_PATH = './files';

const list = async () => {
    try {
        const files = await readdir(DIRECTORY_PATH);
        files.forEach((file) => console.log(file));
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();
