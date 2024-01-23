import fs from 'fs';
import path from 'path';
import { getDir } from '../utils/getDir.js';

const dirname = getDir(import.meta.url);
const filename = path.join(dirname, 'files', 'fileToRemove.txt');
const remove = async () => {
    fs.rm(filename, (err) => {
        if(err) {
            throw new Error('FS operation failed');
        }
    })
};

await remove();