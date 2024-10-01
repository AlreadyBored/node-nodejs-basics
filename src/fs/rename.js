import { rename as renameFile } from 'fs/promises';
import __dirname from './__dirname.js';
import { join } from 'path';
import isNotExist from './isNotExist.js';

const oldFile = join(__dirname, 'files', 'wrongFilename.txt')
const newFile = join(__dirname, 'files', 'properFilename.md')

const rename = async () => {
    if( await isNotExist(newFile) && !(await isNotExist(oldFile)) ){
        await renameFile(oldFile, newFile)
    }
    else {
        throw new Error('FS operation failed')
    }
};

await rename();