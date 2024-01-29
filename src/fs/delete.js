import { rm } from 'node:fs/promises';

const errorMessage = 'FS operation failed';

const filePath = new URL('files/fileToRemove.txt', import.meta.url);

const remove = async () => {
    try{
        await rm(filePath);
        console.log('File \'fileToRemove.txt\' deleted');
    } catch (err) {
        throw new Error (errorMessage);
    }
};

await remove();