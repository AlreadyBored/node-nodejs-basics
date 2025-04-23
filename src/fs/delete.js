import fs from 'fs';

const remove = async () => {
    // Write your code here unlink
    try {
        fs.unlink('./src/fs/files/fileToRemove.txt', (err) => {
            if (err) throw new Error('FS operation failed')
        })

    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();