import fs from 'fs';

export const rename = async () => {
    const exists = fs.existsSync('./src/fs/files/wrongFilename.txt', () => {});
    const newExists = fs.existsSync('./src/fs/files/properFilename.md', () => {});
    
    if (exists && !newExists) {
        fs.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md', () => {})
    } else {
        throw new Error('FS operation failed');
    }
};


// rename()