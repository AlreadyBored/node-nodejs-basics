import fs from 'fs';

const remove = async () => {
    const fileToDelete = './src/fs/files/fileToRemove.txt';
    if (!fs.existsSync(fileToDelete)) {
        throw new Error ('FS operation failed');
    }
    fs.unlink(fileToDelete, error => {});
};

await remove();