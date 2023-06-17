/*
 implement function that copies folder files files with all its content 
 into folder "files_copy" at the same level 
 (if files folder doesn"t exists or files_copy has already been created 
 Error with message FS operation failed must be thrown)
*/

import fs from "fs";

const ERR_MSG = "FS operation failed";
const SRC = "./src/fs/files/";
const DEST = "./src/fs/files_copy";

// looks stupid, but it works, it could be symlified and... how to avoid transactional issues?

const checkSrc = async (dir) => {
    fs.access(dir, function (err) {
        if (err) {
            throw new Error(ERR_MSG);
        }
    });
}

const checkDest = async (dir) => {
    fs.stat(dir, function (err, stat) {
        if (err == null) {
            throw new Error(ERR_MSG);
        }
    });
}

const copy = async () => {
    checkSrc(SRC);
    checkDest(DEST);

    fs.cp(SRC, DEST, { recursive: true }, (err) => {
        if (err) {
            console.error(err);
        }
    });
};

await copy();
