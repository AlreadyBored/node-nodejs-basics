import fs from 'fs'
import path from 'path'

export const remove = async () => {
    // Write your code here 
    const path_file = path.join(process.cwd(), 'files', 'fileToRemove.txt');

    fs.exists(path_file, (exists) => {
        if(!exists) return console.error("FS operation failed")
        fs.unlink(path_file, (err) => {
            if(err) return console.error(err);
            console.log("File deleted");
        });
    })
};