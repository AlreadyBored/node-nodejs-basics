import {isExist} from "./services/fs.service.js";
import fs from "fs/promises";
import {FILES_FOLDER_PATH} from "./constants/fs.constants.js";
import {printError} from "./services/log.service.js";

const list = async () => {
    // Write your code here
    await isExist(FILES_FOLDER_PATH)
        .then((res) => {
            if(!res) throw new Error('FS operation failed');
            return fs.readdir(FILES_FOLDER_PATH);
        })
        .then(fileNames => console.log(fileNames))
        .catch(err => printError(err.message))
};

await list();