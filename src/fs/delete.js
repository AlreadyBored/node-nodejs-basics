import { unlink } from "fs";
import { _printErorr as printError } from "./printError.js"

async function deliteFile(path) {
    unlink(path, (error) => {
        printError(error);
    });
}

async function makeTask(path) {
    deliteFile(path);
}

const path = 'src/fs/files/fileToRemove.txt';
makeTask(path);

export const remove = async () => {
    // Write your code here
    makeTask(path);
};