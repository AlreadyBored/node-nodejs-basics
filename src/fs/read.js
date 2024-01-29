import fs from 'fs';


const read = async () => {
    fs.readFile('src/fs/files/fileToRead.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('FS operation failed');
        } else {
            console.log(data);
        }
    })
};

await read();