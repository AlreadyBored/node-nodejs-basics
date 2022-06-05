import { rename as _rename } from "fs";
import { _printErorr as printError } from "./printError.js"


function renameFile(oldPath, newPath) {
    _rename(oldPath, newPath, error => {
        printError(error);
    });
}

function makeTask(newPath, oldPath) {
    renameFile(oldPath, newPath);
}

const oldPath = 'src/fs/files/wrongFilename.txt';
const newPath = 'src/fs/files/properFilename.md';

export const rename = async () => {
    // Write your code here 
    makeTask(newPath, oldPath);
};