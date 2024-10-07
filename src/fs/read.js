import fs from 'fs';

const read = async () => {
    fs.readFile('src/fs/files/fileToRead.txt', 'utf8', (err, data) => {
        if (err?.code === 'ENOENT') {
            throw Error ('FS operation failed');
        } else if (data) {
            console.log(data);            
        }
    });
};

await read();