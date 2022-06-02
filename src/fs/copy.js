import fs from 'fs'
import path from 'path'

export const copy = async () => {
    // Write your code here 
    const path_file = path.join(process.cwd(), 'files');
    const path_file_copy = path.join(process.cwd(), 'files_copy');

    fs.readdir(path_file, (err, data) => {
        if(err) return console.error(err);
        fs.exists(path_file_copy, (exists) => {
            if(exists) return console.error("FS operation failed")
            fs.mkdir(path_file_copy, (err) => {
                if(err) return console.error(err);
                data.map(file => {         
                    fs.copyFile(path.join(path_file, file), path.join(path_file_copy, file), (err) => {
                        if(err) return console.error(err);
                    })
                })
            });                               
        })
    })
};