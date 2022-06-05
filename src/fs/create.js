import { mkdir, open, appendFile } from "fs";
import { _printErorr as printError } from "./printError.js"

async function createDirrectory(nameDir) {
    mkdir(nameDir, error => {
        printError(error)
    });
}

async function createFile(path) {
    open(path, 'w', (error) => {
        if (error) throw new Error('FS operation failed');
        printError(error)
    });
}

async function writeFile(path, fileText) {
    appendFile(path, fileText, (error) => {
        if (error) throw new Error('FS operation failed');
        printError(error)
    });
}

async function makeTask(nameFile, nameDir, fileText) {
    const path = nameDir + '/' + nameFile;
    createDirrectory(nameDir);
    createFile(path);
    writeFile(path, fileText);
}


const nameFile = 'fresh.txt';
const nameDir = 'src/fs/files';
const fileText = 'I am fresh and young';

export const create = async () => {
    // Write your code here 
    makeTask(nameFile, nameDir, fileText);
};