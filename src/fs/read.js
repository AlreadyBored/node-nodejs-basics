import fs from 'fs';

const read = async () => {
    const fileToRead = './src/fs/files/fileToRead.txt';
    if (!fs.existsSync(fileToRead)) {
        throw new Error ('FS operation failed');
    }
    fs.readFile(fileToRead, (err, data) => {
        console.log (data.toString());
    });
};

await read();