/** 
 * implement function that renames file wrongFilename.txt to properFilename with extension .md 
 * (if there's no file wrongFilename.txt or properFilename.md already exists Error with message 
 * FS operation failed must be thrown)
 */
import { access, rename as renameFile, constants } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, normalize } from 'path';
const dir = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
    // Write your code here 
    let src = normalize(dir + '/files/wrongFilename.txt');
    let dst = normalize(dir + '/files/properFilename.md');

    access(dst, constants.F_OK, (err) => {
        if (err && err.code === 'ENOENT') {
            renameFile(src, dst, (err) => {
                if (err) {
                    if (err.code === 'ENOENT') {
                        throw new Error('FS operation failed');
                    } else {
                        throw err;
                    }
                }
            });
        } else {
            throw new Error('FS operation failed');
        }
    });

};

await rename();
