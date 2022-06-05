import fs from 'fs';

export const remove = async () => {
    if (fs.existsSync('./files/fileToRemove.txt')) {
        fs.rm('./files/fileToRemove.txt', err => {
            if (err) throw err;
        });
    }
    else throw new Error('FS operation failed');
};

await remove();