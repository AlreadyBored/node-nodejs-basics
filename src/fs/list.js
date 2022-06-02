import fs from 'fs'
import path from 'path'

export const list = async () => {
    // Write your code here 
    const path_file = path.join(process.cwd(), 'files');
    fs.exists(path_file, (exists) => {
        if(!exists) return console.error("FS operation failed")
        fs.readdir(path_file, (err, data) => {
            if(err) return console.error(err);            
            console.log(data);                        
        })
    })
};