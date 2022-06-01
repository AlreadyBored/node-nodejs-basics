import { unlink } from "fs";
import { _printErorr as printError } from "./printError.js"

function deliteFile(path){
    unlink(path, function(error){
        printError(error);
    });
}

function makeTask(path) {
    deliteFile(path);
}

const path = 'files/fileToRemove.txt';
makeTask(path);

export const remove = async () => {
    makeTask(path);
    // Write your code here 
};