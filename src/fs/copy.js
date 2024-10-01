import __dirname from './__dirname.js';
import { join } from 'path';
import isNotExist from './isNotExist.js';
import { cp } from 'fs/promises';

const oldFolder = join(__dirname, 'files')
const newFolder =  join(__dirname, 'files_copy')

const copy = async () => {

    if(await isNotExist(newFolder) && !(await isNotExist(oldFolder)) ) {
        await cp(oldFolder, newFolder, {recursive: true})
    }
    else {
        throw new Error('FS operation failed')
    }
};

await copy();
