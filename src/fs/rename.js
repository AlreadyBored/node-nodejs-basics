import fs from 'fs';

export const rename = async () => {
    if (fs.existsSync('./files/wrongFilename.txt') && !fs.existsSync('./files/properFilename.md')) {
        fs.rename('./files/wrongFilename.txt', './files/properFilename.md', error => {
            if (error) {
                throw error;
            }
        })
    }
    else {
        throw new Error("FS operation failed");
    }
};