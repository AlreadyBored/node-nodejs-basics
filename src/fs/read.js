import fs from 'node:fs';
import path from 'path';
const read = async () => {
    const filePath = path.join('fs', 'files', 'fileToRead.txt');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err) throw new Error('FS operation failed');

        console.log(data);
    })
};

await read();