import path from 'node:path';
import fs from 'node:fs'

const remove = async () => {
    // Write your code here 
    const deleteFile = path.resolve('src', 'fs', 'files', 'fileToRemove.txt');

    fs.unlink(deleteFile, (err) => {
        if (err) {
            console.log('FS operation failed!');
            return;
        }
        console.log('File removed!');
    });
};

await remove();