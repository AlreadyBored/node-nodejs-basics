import * as fs from 'fs';

export const remove = async () => {
    try {
        fs.access('./src/fs/files/fileToRemove.txt', (err) => {
            if (err) {
                throw new Error('FS operation failed');
            } else {
                fs.unlink('./src/fs/files/fileToRemove.txt', (err) => {
                    if (err) {
                      throw err;
                    }
                });
            }
        });
    } catch (e) {
        console.log(e);
    }
};

await remove();