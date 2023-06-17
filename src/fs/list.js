/*
 implement function that prints all array of filenames from files folder into console 
 (if files folder doesn"t exists Error with message FS operation failed must be thrown)
*/

import fs from "fs";

const list = async () => {
    const dir = "./src/fs/files";

    fs.readdir(dir, (err, files) => {
        if (err && err.code === "ENOENT") {
            throw new Error("FS operation failed");
        }
        console.log(files);
    });
};

await list();