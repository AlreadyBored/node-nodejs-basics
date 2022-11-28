import * as fs from 'fs';

const read = async () => {
    const file = 'src/fs/files/fileToRead.txt';

    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.log("FS operation failed", err);
        }
        console.log(data);
    });
};

await read();