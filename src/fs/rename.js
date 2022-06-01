import { rename } from "fs";
import { _printErorr as printError } from "./printError.js"


function renameFile(oldPath,newPath){
    rename(oldPath, newPath, error => {
        printError(error);
     });
}

function makeTask(newPath,oldPath) {
    renameFile(oldPath, newPath);
}

const oldPath = 'wrongFilename.txt';
const newPath = 'properFilename.md';

makeTask(newPath,oldPath);

export const rename = async () => {
    // Write your code here 
    makeTask(newPath,oldPath);
};