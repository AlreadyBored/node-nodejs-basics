import __dirname from './__dirname.js';
import { join } from 'path';
import { readFile } from 'fs';

const filePath = join(__dirname, 'files', 'fileToRead.txt')

const read = async () => {
    readFile(filePath, 'utf-8',(err, data) => {
        if(err) throw new Error('FS operation failed')
        console.log(data)
    })
};

await read();