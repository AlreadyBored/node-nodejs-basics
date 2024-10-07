import { createHash } from 'crypto';
import fs from 'node:fs';
import path from 'node:path';
import fsPromises from 'node:fs/promises';

import { getDirName } from '../fs/getDir.js';

const calculateHash = async () => {

    const hash = createHash('sha256');

    const filePath = path.join(getDirName(import.meta.url), './files/fileToCalculateHashFor.txt');

    if (!fs.existsSync(filePath)) {
        throw Error('FS operation failed');
    }

    return fsPromises.readFile(filePath, 'utf-8').then(  data=>{
        hash.update(data);
        console.log(hash.digest('hex'))
    }).catch(e=> {
        console.log(e);
    })
};

await calculateHash();