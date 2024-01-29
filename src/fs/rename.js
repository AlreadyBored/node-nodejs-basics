import fs from 'fs';

const rename = async () => {
    if (fs.existsSync('src/fs/files/wrongFilename.txt') && !fs.existsSync('src/fs/files/properFilename.md')) {
        fs.rename('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md', error => error && console.log(error));
    } else {
        console.log(new Error('FS operation failed'));
    }
};

await rename();