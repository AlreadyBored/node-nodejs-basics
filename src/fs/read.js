import fs from 'fs'
import path from 'path'

export const read = async () => {
    // Write your code here 
    const path_file = path.join(process.cwd(), 'files', 'fileToRead.txt');
    fs.exists(path_file, (exists) => {
        if(!exists) return console.error("FS operation failed")
        fs.readFile(path_file, "utf8", (err, data) => {
            if(err) return console.error(err);
            console.log(data);
        });           
    })
};