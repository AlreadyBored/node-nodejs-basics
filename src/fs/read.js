import fs from "fs";

export const read = async () => {
    fs.access('./files/fileToRead.txt', (err) => {
        if(err) {
            throw "FS operation failed";
        }
        fs.readFile('./files/fileToRead.txt', (err, data) => {
            if(err) throw "FS operation failed";
            console.log(data.toString());
        })
    })
};
read();