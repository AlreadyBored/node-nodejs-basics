import { readdir } from 'fs/promises';
import __dirname from './__dirname.js';
import { join } from 'path';
import isNotExist from './isNotExist.js';

const folder = join(__dirname, 'files')

const list = async () => {
    if( !(await isNotExist(folder)) ){
        const arrFiles = await readdir(folder)
        for (const file of arrFiles) {
            console.log(file)
        }
    }
    else {
        throw new Error('FS operation failed')
    } 
};

await list();