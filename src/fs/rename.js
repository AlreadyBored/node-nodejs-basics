import fs from 'fs';

const rename = async () => {
    const wrongFile = 'src/fs/files/wrongFilename.txt';
    const properFile = 'src/fs/files/properFilename.md';
    fs.access(wrongFile, fs.constants.F_OK, (err) => {
        if (err) throw new Error('FS operation failed');
    });
    fs.access(properFile, fs.constants.F_OK, (err) => {
        if (!err) throw new Error('FS operation failed');
    });
    fs.rename(wrongFile, properFile, (err) => {
        if (err) throw err;
    });
};

await rename();
