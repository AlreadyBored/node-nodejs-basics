import path from "path";
import {FILES_FOLDER_PATH} from "./constants/fs.constants.js";
import {isExist} from "./services/fs.service.js";
import fs from "fs/promises";
import {printError} from "./services/log.service.js";

const fileToRemove = "fileToRemove.txt";
const filePath = path.join(FILES_FOLDER_PATH, fileToRemove)
const remove = async () => {
    // Write your code here
    await isExist(filePath)
        .then((res) => {
            if(!res) throw new Error('FS operation failed');
            return fs.rm(filePath);
        })
        .catch(err => printError(err.message))
};

await remove();