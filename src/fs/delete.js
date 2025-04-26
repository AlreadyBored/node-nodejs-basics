import { access, rm } from 'node:fs/promises';


const remove = async () => {
    const fileDelete = 'src/fs/files/fileToRemove.txt'
    try {
        await access(fileDelete);
        await rm(fileDelete);
    } catch (error) {
        throw new Error('FS operation failed');
    }
    
};

await remove();