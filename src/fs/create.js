import { mkdir, open, appendFile, existsSync } from "fs";
import { _printErorr as printError } from "./printError.js"

async function createDirrectory(nameDir) {
    mkdir(nameDir, error => {
        printError(error)
    });
}

async function createFile(path) {
    open(path, 'w', (error) => {
        printError(error)
    });
}

async function writeFile(path, fileText) {
    appendFile(path, fileText, (error) => {
        printError(error)
    });
}

async function makeTask(nameFile, nameDir, fileText) {
    const path = nameDir + '/' + nameFile;
    if (!existsSync(path)) {
        createDirrectory(nameDir);
        createFile(path);
        writeFile(path, fileText);
    } else {
        console.log('FS operation failed');
    }
}

const nameFile = 'fresh.txt';
const nameDir = 'files';
const fileText = 'I am fresh and young';

//как-будто вызов функции из вне
makeTask(nameFile, nameDir, fileText);

export const create = async () => {
    // Write your code here 
    makeTask(nameFile, nameDir, fileText);
};