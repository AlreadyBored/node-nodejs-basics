/**
 * implement function that prints all array of filenames from files folder into console 
 * (if files folder doesn't exists Error with message FS operation failed must be thrown)
 */
import { readdir} from 'fs';
import { fileURLToPath } from 'url';
import { dirname, normalize } from 'path';
const dir = dirname(fileURLToPath(import.meta.url));

const list = async () => {
    // Write your code here 
    let src = normalize(dir + '/files');

    readdir(src, (err, files) => {
        if (!err) {
            if (files.length > 0) {
                for (let f of files) {
                        console.log(f);
                }
            }
        } else {
            if (err.code === 'ENOENT') {
                throw new Error('FS operation failed');
            } else {
                throw err;
            }
        }

    });

};

await list();