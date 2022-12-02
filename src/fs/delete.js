import { rm } from 'fs/promises'

const remove = async () => {
    const deleteFile = 'src/fs/files/fileToRemove.txt';

    try {
        await rm(deleteFile)
    } catch (err) {
        throw new Error ('FS operation failed')
    }
};

await remove();