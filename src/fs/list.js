import path from 'node:path';
import {getDirName} from './getDir.js';
import fs from 'node:fs';
import fsPromises from 'fs/promises';

const list = async () => {

    const filePath = path.join(getDirName(import.meta.url), './files');
    
    if (!fs.existsSync(filePath)) {
        throw Error('FS operation failed');
    }

    return fsPromises.readdir(filePath, { withFileTypes: true })
        .then( resp => console.log(resp.map(file=> file.name)));
};

await list();