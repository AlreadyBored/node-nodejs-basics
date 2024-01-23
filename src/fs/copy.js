import fs from 'fs';
import path from 'path';
import { getDir } from '../utils/getDir.js';

const dirname = getDir(import.meta.url);
const sourceDir = path.join(dirname, 'files');
const destDir = path.join(dirname, 'files_copy');

const copy = async () => {
    fs.access(sourceDir, (e) => {
        if(e){
            throw new Error('FS operation failed');
        }

        fs.access(destDir, (err) => {
            if(!err){
                throw new Error('FS operation failed');
            }
            fs.mkdir(destDir, () => {});
            fs.cp(sourceDir, destDir, {recursive: true}, () => {});
        })
    })
};

await copy();
