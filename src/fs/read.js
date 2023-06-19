import { readFile } from 'fs/promises';
import __dirname from './pathGenerator/pathGenerator.js';

const read = async () => {
    await readFile(`${__dirname}files/fileToRead.txt`, "utf-8")
    .then(data=>{
        console.log(data)
    }).catch(err=>{
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    })
};

await read();