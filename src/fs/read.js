/**
 * implement function that prints content of the fileToRead.txt into console 
 * (if there's no file fileToRead.txt Error with message 
 * FS operation failed must be thrown)
 */
import { readFile } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, normalize } from 'path';
const dir = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    // Write your code here 
    let src = normalize(dir + '/files/fileToRead.txt');
    readFile(src, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                throw new Error('FS operation failed');
            } else {
                throw err;
            }
        } else {
            console.log(data);
        }

    });
};

await read();