import {isExist} from "./services/fs.service.js";
import {FILES_FOLDER_PATH} from "./constants/fs.constants.js";
import fs from "fs/promises";
import path from "path";
import {printError} from "./services/log.service.js";

const fileToRead = "fileToRead.txt";
const filePath = path.join(FILES_FOLDER_PATH, fileToRead)
const read = async () => {
    // Write your code here
    await isExist(filePath)
        .then((res) => {
            if(!res) throw new Error('FS operation failed');
            return fs.readFile(filePath, {encoding: "utf-8"});
        })
        .then(file => console.log(file))
        .catch(err => printError(err.message))
};

await read();