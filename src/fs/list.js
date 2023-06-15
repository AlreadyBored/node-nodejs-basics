/**
 list.js - implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)
 */
import * as fs from 'fs/promises';
import {FsError} from './fs-error.js';

const list = async () => {
    const path = 'src/fs/files2'
    try {
        const files = await fs.readdir(path);
        for (const file of files) {
            console.log(file);
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new FsError();
        }
    }
};

await list();
