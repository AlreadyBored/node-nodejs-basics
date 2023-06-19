import { unlink, access } from 'fs/promises';
const remove = async () => {
    const fileToRemove = './fileToRemove.txt';
    try {
        try {
            await access(fileToRemove);
        } catch (error) {
            throw new Error('FS operation failed');
        }
        await unlink(fileToRemove);
        console.log('File deleted successfully.');
    } catch (error) {
        console.error(error.message);
    }
};

await remove();
