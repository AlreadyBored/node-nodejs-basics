import { unlink, readFile } from 'fs/promises';

const remove = async () => {
    const fileToRemove = 'src/fs/files/fileToRemove.txt';
    try {
        await readFile(fileToRemove)
        await unlink(fileToRemove);
    } catch(error) {
        console.error('FS operation failed')
    }
};

await remove();