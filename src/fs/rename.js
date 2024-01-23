import fs from 'fs';
import path from 'path';
import { getDir } from '../utils/getDir.js';

const dirname = getDir(import.meta.url);
const wrongFile = path.join(dirname, 'files', 'wrongFilename.txt');
const properFile = path.join(dirname, 'files', 'properFilename.md');

const rename = async () => {
    fs.access(wrongFile, (e) => {
        if(e){
            throw new Error('FS operation failed');
        }

        fs.access(properFile, (err) => {
            if(!err){
                throw new Error('FS operation failed');
            }
            fs.rename(wrongFile, properFile, () => {});
        })
    })
};

await rename();