/*  implement function that deletes file fileToRemove.txt 
(if there's no file fileToRemove.txt Error with message FS 
*/
import { unlink, copyFile } from 'fs';
import { join as platform_path } from 'path';
const remove = async () => {
    // Write your code here 
    let src = platform_path('files', 'fileToRemove.txt');
    // copyFile(src, src+'.0', (err) => {if (err) throw err;});
    unlink(src, (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                throw new Error('FS operation failed');
            } else {
                throw err;
            }            
        } else {
                // console.log('OK');
        }
    });
};

await remove();