import fs from 'fs'
import path from 'path'

export const rename = async () => {
    // Write your code here 
    const path_file = path.join(process.cwd(), 'files', 'wrongFilename.txt');
    const new_path_file = path.join(process.cwd(), 'files', 'properFilename.md');

    fs.exists(path_file, (exists) => {
        if(!exists) return console.error("FS operation failed")
        fs.exists(new_path_file, (exists) => {
            if(exists) return console.error("FS operation failed")
            fs.rename(path_file, new_path_file, (err) => {
                if(err) return console.error(err)
                console.log("File renamed");
            })
        })
    })
};