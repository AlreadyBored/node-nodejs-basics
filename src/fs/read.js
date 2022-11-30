import fs from "fs";
import {access, constants} from "node:fs";

const read = async () => {
    const path = 'files/fileToRead.txt'
    access(path, constants.F_OK, (err) => {
        if (err) {
            throw 'FS operation failed'
        }
        fs.readFile(path, 'utf8',  (err, data) => {
            console.log(data);
        });

    });

};

await read();