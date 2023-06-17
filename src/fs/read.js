/*
 implement function that prints content of the fileToRead.txt into console 
 (if there"s no file fileToRead.txt Error with message FS operation failed must be thrown)
*/

import { readFile } from "fs";

const read = async () => {

    readFile("./src/fs/files/fileToRead.txt", "utf8", (err, data) => {
        if (err && err.code === "ENOENT") {
            throw new Error("FS operation failed");
        }
        console.log(data);
    });
};

await read();