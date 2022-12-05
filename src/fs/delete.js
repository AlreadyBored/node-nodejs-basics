import { rm } from 'node:fs/promises';
const error = new Error('FS operation failed');

const remove = async() => {
    try {
        await rm('fs/files/fileToRemove.txt');
    } catch {
        console.error(error.message);
    }

};

await remove();