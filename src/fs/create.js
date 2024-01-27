/**
 * create.js - implement function that creates new file fresh.txt with content 
 * 'I am fresh and young' inside of the files folder (if file already existsError 
 * with message 'FS operation failed' must be thrown) 
 * */

import { access, constants, writeFile } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, normalize } from 'path';
const dir = dirname(fileURLToPath(import.meta.url));

const create = async () => {
    // Write your code here
    let src = normalize(dir + '/files/fresh.txt');

    access(src, constants.F_OK, (err) => {
        if (err) {
            writeFile(src, 'I am fresh and young', 'utf8', (err) => {
                if (err) throw err;
            });
        } else {
            throw new Error('FS operation failed');
        }
    });
};

await create();