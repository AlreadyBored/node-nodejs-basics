/*
 implement function that deletes file fileToRemove.txt 
 (if there"s no file fileToRemove.txt Error with message FS operation failed must be thrown)
*/

import fs from "fs";

const FILE_TO_REMOVE = "./src/fs/files/fileToRemove.txt";
const ERR_MSG = "FS operation failed";

const check = async (path, errMsg) => {
        fs.access(path, function (err) {
            if (err) {
                throw new Error(errMsg);
            }
        });
}

const remove = async () => {

    check(FILE_TO_REMOVE, ERR_MSG);

    fs.unlink(FILE_TO_REMOVE, function (err) {
        console.log(err);
    })
};

await remove();