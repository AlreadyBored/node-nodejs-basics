import fs from 'node:fs';
import path from 'node:path';
import { getDirName } from './getDir.js';
import fsPromises from 'node:fs/promises';

const read = async () => {
    const filePath = path.join(getDirName(import.meta.url), './files/fileToRead.txt');
    if (!fs.existsSync(filePath)) {
        throw Error('FS operation failed');
    }
    
    return fsPromises.readFile(filePath, 'utf-8').then(  data=>{
        console.log(data);
    }).catch(e=> {
        console.log(e);
    })
};

await read();