import { unlink } from 'node:fs';

const remove = async () => {
    // Write your code here
    const filePath = './files/fileToRemove.txt';

    unlink(filePath, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
        console.log('File has been deleted')
    });
};

await remove();