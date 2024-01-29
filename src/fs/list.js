import { readdir } from 'node:fs/promises';

const errorMessage = 'FS operation failed';
const filesPath = new URL('files', import.meta.url);

const list = async () => {
    try{
        const filesList = await readdir(filesPath);
        console.log('File list: ', filesList);
    } catch (err) {
        throw new Error (errorMessage);
    }
};

await list();