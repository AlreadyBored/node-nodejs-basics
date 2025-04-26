import fs from 'fs';

const read = async (srcPath = './src/fs/files/fileToRead.txt',  errorText = 'FS operation failed') => {
    fs.readFile(srcPath, (err, data) => {
        if (err) {
            throw new Error(errorText);
        }
        console.log(data.toString());
    })
};

await read();
