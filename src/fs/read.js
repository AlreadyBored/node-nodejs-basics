import fs from 'fs';

const read = async () => {
    fs.readFile('src/fs/files/fileToRead.txt', 'utf-8', (err, data) => {
        if (err) throw console.error('Error: FS operation failed');
        console.log(data);
    })
};

await read();