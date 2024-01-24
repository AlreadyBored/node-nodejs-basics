/* copy.js - implement function that copies folder files files with all its content into 
folder files_copy at the same level (if files folder doesn't exists or files_copy has 
already been created Error with message 'FS operation failed' must be thrown)
*/
import { readdir, mkdir, copyFile } from 'fs';
import { join as platform_path} from 'path';

const copy = async () => {
    // Write your code here 
    let src = 'files';
    let dst = 'files_copy';

    readdir(src, (err, files) => {
        if (!err) {
            mkdir(dst, { recursive: false }, (err) => {
                if (err) {
                    if (err.code === 'EEXIST') {
                        throw new Error('FS operation failed');
                    }
                } else {
                    if (files.length > 0) {
                        for (let f of files) {
                            copyFile(platform_path(src, f), platform_path(dst, f), (err) => {
                                if (err) throw err;
                                // console.log(f);
                            });
                        }
                    }
                }
            });

        } else {
            if (err.code === 'ENOENT') {
                throw new Error('FS operation failed');
            }
        }

    });

};

await copy();
