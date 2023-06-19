import { writeFile } from 'fs/promises';
import __dirname from './pathGenerator/pathGenerator.js';

const create = async () => {
    await writeFile(`${__dirname}files/fresh.txt`, 'I am fresh and young', { flag: "wx" }, () => {
        //console.log("success") 
    }).catch(err => {
        if (err.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
        throw err;
    })
};

await create();