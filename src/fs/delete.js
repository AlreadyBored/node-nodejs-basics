import { access, rm } from 'fs/promises'
const remove = async () => {
    try {
        await access('files/fileToRemove.txt')
        await rm('files/fileToRemove.txt')
    } catch(err) {
        throw new Error('FS operation failed')
    }
};

await remove();