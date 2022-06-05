import fs from 'fs';

export const remove = async () => {
    if (fs.existsSync('./files/fileToRemove.txt')) {
        fs.unlink('./files/fileToRemove.txt', error => {
            if (error) {
                throw error;
            }
        })
    }
    else {
        throw new Error("FS operation failed");
    }
};