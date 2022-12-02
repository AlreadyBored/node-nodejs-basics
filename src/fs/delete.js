import { rm } from 'node:fs/promises';

const remove = async () => {
    const fileToRemovePath = new URL('./files/fileToRemove.txt', import.meta.url);
    
    try {
        await rm(fileToRemovePath);
    } catch(_error) {
        console.error('FS operation failed');
    }
};

await remove();