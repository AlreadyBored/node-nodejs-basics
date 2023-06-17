/*
 implement function that renames file wrongFilename.txt to properFilename with extension .md 
 (if there"s no file wrongFilename.txt or properFilename.md already exists 
 Error with message FS operation failed must be thrown)
*/

import fs from "fs";

const ERR_MSG = "FS operation failed";
const WRONG_FILE_NAME = "./src/fs/files/wrongFilename.txt";
const PROPER_FILE_NAME = "./src/fs/files/properFilename.md";

const check = async (path, msg, hasExist) => {
    fs.stat(path, function (err, stat) {
        if ((err == null && hasExist == false) || (err != null && err.code === "ENOENT" && hasExist == true)) {
            throw new Error(msg);
        }
    });
}

const rename = async () => {
    check(WRONG_FILE_NAME, ERR_MSG, true);
    check(PROPER_FILE_NAME, ERR_MSG, false);

    fs.rename(WRONG_FILE_NAME, PROPER_FILE_NAME, function (err) {
        if (err) {
            throw new Error(ERR_MSG);
        }
    });
};

await rename();