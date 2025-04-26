import * as fs from 'node:fs'

const read = async () => {
    // Write your code here 
    fs.readFile('./src/fs//files/fileToRead.txt', { encoding: 'utf-8' }, (err, content) => {
        if (err) {
            throw Error('FS operation failed', { cause: err.message })
        }
        console.log(content);
    })
};

await read();