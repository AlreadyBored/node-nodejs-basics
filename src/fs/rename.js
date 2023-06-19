import fs from 'fs';

const rename = async () => {

    if (!fs.existsSync('./src/fs/files/wrongFilename.txt') || fs.existsSync('./src/fs/properFilename.md')) {
        throw new Error('FS operation failed');
    }

    fs.rename('./src/fs/files/wrongFilename.txt', './src/fs/files/properFilename.md', (err) => {
        if (err) throw err;
        console.log('success!')
    });
};

await rename();