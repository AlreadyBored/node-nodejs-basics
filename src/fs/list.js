import { readdir, stat } from "fs";
import { _printErorr as printError } from "./printError.js"

async function isDirectory(path) {
    stat(path, function (error, stat) {
        printError(error)
        if (!error)
            (stat.isDirectory()) ?
                printFileList(path) :
                console.log(path);
    });
}

async function printFileList(oldDirectory) {
    readdir(oldDirectory, (error, files) => {
        printError(error);
        if (!error)
            for (let i in files) {
                let newPath = path + '/' + files[i];
                isDirectory(newPath);
            }
    });
}

async function directoryCreated(path) {
    stat(path, function (error) {
        printError(error)
    });
}

async function makeTask(path) {
    directoryCreated(path)
    printFileList(path)
}

const path = 'src/fs/files';

export const list = async () => {
    // Write your code here 
    makeTask(path);
};