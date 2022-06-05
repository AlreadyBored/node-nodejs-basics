import fs from "fs";

export const rename = async () => {
    fs.access('./files/wrongFilename.txt', (err) => {
        if (err) {
            throw "FS operation failed";
        }
        fs.rename('./files/wrongFilename.txt', './files/properFilename.txt', (error) => {
            if(error?.code === 'ENOENT') {
                throw "FS operation failed";
            }
        })
    })
};
rename();