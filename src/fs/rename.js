import fs from 'fs';

const rename = async () => {
    // Write your code here 
    try {
        const isExists = fs.existsSync('./src/fs/files/properFilename.txt');
        if (isExists) throw new Error('FS operation failed');
        fs.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md', (err) => {
            if (err) throw new Error('FS operation failed');
        })
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();