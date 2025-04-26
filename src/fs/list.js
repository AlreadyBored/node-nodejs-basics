import fs from 'fs';

const list = async (srcPath = './src/fs/files',  errorText = 'FS operation failed') => {
    fs.readdir(srcPath, (err, files) => {
        if (err) {
            throw new Error(errorText);
        }
        console.log(files);
    });
};

await list();
