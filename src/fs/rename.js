import fs from 'fs';

export const rename = async () => {
    if (fs.existsSync('./files/wrongFilename.txt') && !fs.existsSync('./files/properFilename.md')) {
        fs.rename('./files/wrongFilename.txt', './files/properFilename.md', err => {
            if (err) throw err;
        });
    }
    else throw Error('FS operation failed');
};

await rename();