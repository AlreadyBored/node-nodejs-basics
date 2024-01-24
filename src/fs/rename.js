/* implement function that renames file wrongFilename.txt to properFilename with extension .md 
(if there's no file wrongFilename.txt or properFilename.md already exists Error with message 
FS operation failed must be thrown)
 */
import { copyFile, constants, unlink } from 'fs';
import { join as platform_path } from 'path';

const rename = async () => {
    // Write your code here 
    let src = platform_path('files', 'wrongFilename.txt');
    let dst = platform_path('files', 'properFilename.md');

    copyFile(src, dst, constants.COPYFILE_EXCL, (err) => {
        if (err) {
            if (err.code === 'EEXIST') {
                throw new Error('FS operation failed');
            } else if (err.code === 'ENOENT') {
                throw new Error('FS operation failed');
            }
        } else {
            unlink(src, (err) => {
                if (err) throw err;
                // console.log('OK');
            });
        }
    });
};

await rename();
