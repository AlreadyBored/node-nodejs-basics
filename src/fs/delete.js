import { unlink } from 'fs/promises';
import __dirname from './pathGenerator/pathGenerator.js';

const remove = async () => {
    await unlink(`${__dirname}files/fileToRemove.txt`, () => {
        //console.log("success") 
    }).catch(err => {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        throw err;
    })
};

await remove();