/**
 list.js - implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)
 */
import * as fs from 'fs/promises';
import {FsError} from './fs-error.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    const path = `${__dirname}/files`;
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
