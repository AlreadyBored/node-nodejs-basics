import path from "path";
import fs from "fs/promises";
import {DIR_NAME, FILES_FOLDER_PATH} from "./constants/fs.constants.js";
import {isExist, createFolder, copyFiles} from "./services/fs.service.js"
import {printError} from "./services/log.service.js";

const filesCopyFolderPath = path.join(DIR_NAME, '..', "files_copy")
const copy = async () => {
    // Write your code here
    Promise.allSettled([
        await isExist(FILES_FOLDER_PATH),
        await isExist(filesCopyFolderPath)
    ]).then(([hasFilesFolder, hasFilesCopyFolder]) => {
        if(!hasFilesFolder.value || hasFilesCopyFolder.value) {
            throw new Error('FS operation failed');
        }
        return createFolder(filesCopyFolderPath);
    })
        .then(() => fs.readdir(FILES_FOLDER_PATH))
        .then((fileNames) => copyFiles(FILES_FOLDER_PATH, filesCopyFolderPath, fileNames))
        .catch(err => printError(err.message))
};

await copy();