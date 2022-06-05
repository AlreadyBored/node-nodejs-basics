import * as fs from 'fs';

export const list = async () => {
    // Write your code here 

    try {
        fs.readdirSync('src/fs/files').forEach(file => {
            console.log(file);
        });
    } catch {
        throw new Error("FS operation failed")
    }


};

list()