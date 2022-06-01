import { readFile as _readFile } from "fs";
import { _printErorr as printError } from "./printError.js"

async function readFile(path) {
    _readFile(path, "utf8", (error, data) => {
        printError(error)
        if (!error) console.log(data);
    });

}

async function makeTask(path) {
    readFile(path);
}

const path = 'files/fileToRead.txt';

//makeTask(path);

export const read = async () => {
    // Write your code here 
    makeTask(path);
};