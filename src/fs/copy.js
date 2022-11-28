/*
copy.js - implement function that copies folder files files with all its content into folder files_copy
 at the same level (if files folder doesn't exists or files_copy has already been created Error 
 with message FS operation failed must be thrown)
*/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    // Write your code here 
    const originPath = `${__dirname}/files/`;
    const newPath = `${__dirname}/files_copy/`;

    const prAccess = promisify(fs.access);
    const prMkdir = promisify(fs.mkdir);

    try {
        await prAccess(originPath, fs.constants.F_OK);
    }
    catch (err) {
        throw new Error('FS operation failed'); 
    }

    try {
        await prAccess(newPath, fs.constants.F_OK);
        console.log('files_copy exist');
        throw new Error('FS operation failed'); 
    }
    catch (err) {
               //make copy
               fs.readdir(originPath,{encoding: 'utf-8'}, (err, files) => {
                if (err) {
                    throw err 
                }
                else {
                    prMkdir(newPath);
                    files.forEach(el => {
                        fs.copyFile(`${originPath}${el}`, `${newPath}${el}`, (err) => {
                            if (err) throw err;
                            console.log(`file ${el} coped`);
                          });
                    })
                }
            })
    }
};

copy();