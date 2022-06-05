import * as fs from 'fs';

export const remove = async () => {

    const existsError = new TypeError('FS operation failed')
    
    fs.rm("files/fileToRemove.txt", (err) => {
        if (err) {
            console.log(existsError.message)
        }
    }) 
};

remove()