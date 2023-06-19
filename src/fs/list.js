import { readdir } from 'fs/promises';
import __dirname from './pathGenerator/pathGenerator.js';

const list = async () => {
    const allFiles = await readdir(`${__dirname}files`, async () => {})
    .catch(err => {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        throw err;
    })
    for(let file of allFiles){
        console.log(file);
    }
};

await list();