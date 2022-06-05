import fs from "fs";

export const remove = async () => {
    fs.access('./files/fileToRemove.txt', (err) => {
        if(err) {
            throw "FS operation failed";
        }
        fs.unlink('./files/fileToRemove.txt', (error) => {
            if(error?.code === 'ENOENT') {
                throw "FS operation failed";
            }
        })
    })
};
remove();