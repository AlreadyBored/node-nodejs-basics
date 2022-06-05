import fs from "fs";

export const list = async () => {
    fs.access('./files', (err) => {
        if (err) {
            throw "FS operation failed";
        }
        fs.readdir('./files', (err, files) => {
            if(err) {
                throw "FS operation failed";
            }
            files.forEach(file => console.log(file, "filename"));
        })
    })
};
list();