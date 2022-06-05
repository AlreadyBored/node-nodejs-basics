import * as fs from 'fs';


export const remove = async () => {
    // Write your code here 

    const removeFile = 'src/fs/files/fileToRemove.txt';
    fs.rm(removeFile, { recursive: true }, err => {
        if (err) {
            throw new Error("FS operation failed")
            // throw err;
        }

        console.log(`${removeFile} is deleted!`);
    });
};

remove()