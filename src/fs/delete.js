import fs from 'fs';

export const remove = async () => {
    const exists = fs.existsSync('src/fs/files/fileToRemove.txt', () => {});
    
    if (exists) {
        fs.unlinkSync('src/fs/files/fileToRemove.txt')
    } else {
        throw new Error('FS operation failed');
    }
};


// remove()