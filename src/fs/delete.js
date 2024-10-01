import { rm } from 'fs/promises';
import __dirname from './__dirname.js';
import { join } from 'path';
import isNotExist from './isNotExist.js';

const filePath = join(__dirname, 'files', 'fileToRemove.txt')

const remove = async () => {
    if( !(await isNotExist(filePath) )){
        await rm(filePath)
    }
    else {
        throw new Error('FS operation failed')
    }
};

await remove();