import path from 'node:path';
import fs from 'node:fs'


const read = async () => {
    // Write your code here 
    const readFile = path.resolve('src', 'fs', 'files', 'fileToRead.txt');

    fs.readFile(readFile, { encoding: 'UTF-8' }, (err, data) => {
        if (err) {
            console.log('FS operation failed');
            return;
        }
        console.log(data);
    });

};

await read();