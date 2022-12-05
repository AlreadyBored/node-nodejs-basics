import fs from 'fs';

const rename = async () => {
    const oldFilename = './src/fs/files/wrongFilename.txt';
    const newFilename = './src/fs/files/properFilename.md';
    if (fs.existsSync(newFilename) || !fs.existsSync(oldFilename)) {
        throw new Error ('FS operation failed');
    }
    fs.rename(oldFilename, newFilename, error => {});
};

await rename();