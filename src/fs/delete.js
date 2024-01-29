import { unlink } from 'node:fs';

const remove = async () => {
    // Write your code here 
    const fileToRemove = './src/fs/files/fileToRemove.txt'
    unlink(fileToRemove, (err) => {
        if (err) {
            throw Error('FS operation failed');
        };
    });
};

await remove();