import { mkdir, readdir, copyFile } from 'fs/promises';
import __dirname from './pathGenerator/pathGenerator.js';

const copy = async () => {
    await mkdir(`${__dirname}files_copy`, async () => {
        //console.log("success") 
    })
    .then(async ()=>{
        const allFiles = await readdir(`${__dirname}files`);
        await Promise.all(allFiles.map( file => copyFile(`${__dirname}files/${file}`, `${__dirname}files_copy/${file}`)))
    })
    .catch(err => {
        if (err.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
        throw err;
    })
};

await copy();