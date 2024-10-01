import { writeFile } from 'fs/promises';
import __dirname from './__dirname.js';
import { join } from 'path';
import isNotExist from './isNotExist.js';

const create = async () => {
    const file = join(__dirname, 'files' , 'fresh.txt')
    
    if(await isNotExist(file)) {
        writeFile(file, 'I am fresh and young') 
    }
    else {
        throw new Error('FS operation failed')
    }
};

await create();