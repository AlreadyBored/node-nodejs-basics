
import fs from 'fs';
import path from'path';
import {existsSync} from'node:fs';

const files = './files/'
const files_copy = './files_copy/'

 export const copy = async (from, to) => {
    if(existsSync(files) && !existsSync(files_copy)){
        fs.mkdirSync(to)
        fs.readdirSync(from).forEach(element => {
            if (fs.lstatSync(path.join(from, element)).isFile()) {
                fs.copyFileSync(path.join(from, element), path.join(to, element));
            }
        });
    } else {
            console.log('FS operation failed');
        }
 };


 copy(files, files_copy)
