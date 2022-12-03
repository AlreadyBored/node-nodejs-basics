import { readdir } from 'node:fs/promises';
const DIRECTORY_PATH = './files';

export const list = async (directoryPath) => {
    try {
        const files = await readdir(directoryPath);
        files.forEach((file) => console.log(file));
        return files;
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list(DIRECTORY_PATH);
