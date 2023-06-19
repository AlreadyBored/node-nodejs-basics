import { unlink, existsSync } from 'fs';

const remove = async () => {
    const filePath = './src/fs/files/fileToRemove.txt';
    if (!existsSync(filePath)) {
        throw new Error('FS operation failed');
    }
    unlink(filePath,  (err) => {
        if (err) throw err;
        console.log('File deleted!');
    });
};

await remove();