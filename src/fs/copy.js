import * as fs from 'fs';
import * as path from 'path';

// import * as fs from 'fs/promises';



export const copy = async () => {
    // Write your code here 

    
    function copyFolderSync(from, to) {
        fs.mkdirSync(to);
        fs.readdirSync(from).forEach(element => {
            if (fs.lstatSync(path.join(from, element)).isFile()) {
                fs.copyFileSync(path.join(from, element), path.join(to, element));
            } else {
                copyFolderSync(path.join(from, element), path.join(to, element));
            }
        });
    }


    try {
        copyFolderSync('src/fs/files', 'src/fs/files_copy')
    } catch {
        throw new Error("FS operation failed")
    }

};



copy()