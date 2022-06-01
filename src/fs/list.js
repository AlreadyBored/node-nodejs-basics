import { statSync, readdirSync, stat } from "fs";
import { _printErorr as printError } from "./printError.js"

function isDirectory(path) {
    (statSync(path).isDirectory()) ?
        printFileList(path) :
        console.log(path);
}

function printFileList(path) {
    let files = readdirSync(path);
    for (let i in files) {
        let newPath = path + '/' + files[i];
        isDirectory(newPath);
    }
}

function directoryCreated(path) {
    stat(path, function (error) {
        printError(error)
    });
}

function makeTask(path) {
    try{
        directoryCreated(path)
        printFileList(path)
    }catch{}
}

const path = 'files';
makeTask(path);

export const list = async () => {
    // Write your code here 
    makeTask(path);
};