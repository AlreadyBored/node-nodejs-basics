import fs from 'fs';

const read = async () => {
    if (fs.existsSync('src/fs/files/fileToRead.txt')) {
        fs.readFile('src/fs/files/fileToRead.txt', 'utf-8', (error, data) => {
            error && console.log(error);
            console.log(data);
        })
    } else {
        console.log(new Error('FS operation failed'));
    }
};

await read();