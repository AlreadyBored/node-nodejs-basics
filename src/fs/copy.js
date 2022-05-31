import {
    copyFile,
    mkdir,
    statSync,
    readdirSync,
    constants
} from "fs";
import { _printErorr as printError } from "./printError.js"
const { COPYFILE_EXCL } = constants;

async function createDirrectory(nameDir) {
    mkdir(nameDir, error => {
        printError(error);
    });
}

async function _copyFile(oldPathFile, newPathFile) {
    copyFile(oldPathFile, newPathFile, COPYFILE_EXCL, error => {
        printError(error);
    });
}

async function isDirectory(oldPath, newPath) {
    if (statSync(oldPath).isDirectory()) {
        createDirrectory(newPath);
        startCopy(oldPath, newPath);
    } else {
        console.log(newPath);
        _copyFile(oldPath, newPath);
    }
}

async function startCopy(oldDirectory, newDirectory) {
    let files = readdirSync(oldDirectory);
    for (let i in files) {
        let oldPath = oldDirectory + '/' + files[i];
        let newPath = newDirectory + '/' + files[i];
        isDirectory(oldPath, newPath);
    }
};

async function makeTask(newPath, oldPath) {
    createDirrectory(newPath);
    startCopy(oldPath, newPath);
}

const oldPath = 'files';
const newPath = 'files_copy';

makeTask(newPath, oldPath);

export const copy = async () => {
    // Write your code here 
    makeTask(newPath, oldPath);
};