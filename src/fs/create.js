import { writeFile } from 'fs/promises';
import path from 'path';
import { getDir } from './utils.js';

const pathToCreatedFile = path.join(getDir(), 'files', 'fresh.txt')

const create = async () => {  
    try {
        await writeFile(pathToCreatedFile, 'I am fresh and young', {flag: 'wx'});
    } catch (err) {
        throw new Error('FS operation failed');
    } 
};

await create();