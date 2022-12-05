import { readdir } from 'node:fs/promises';
const error = new Error('FS operation failed');

const list = async() => {
    const path = 'fs/files/';
    try {
        const filesList = await readdir(path);
        for (const file of filesList) {
            console.log(file);
        }
    } catch {
        console.error(error.message);
    }



};

await list();