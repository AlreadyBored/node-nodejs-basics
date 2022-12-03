import path from "path";
import {FILES_FOLDER_PATH} from "./constants/fs.constants.js";
import fs from "fs/promises";
import {printError} from "./services/log.service.js";

const wrongName = "wrongFilename.txt";
const rightName = "properFilename.md";
const rename = async () => {
    // Write your code here
    await fs.readdir(FILES_FOLDER_PATH)
        .then(fileNames => {
            if(!fileNames.includes(wrongName) || fileNames.includes(rightName)) {
                throw new Error('FS operation failed');
            }
            const oldFileName = path.join(FILES_FOLDER_PATH, wrongName)
            const newFileName = path.join(FILES_FOLDER_PATH, rightName)

            return fs.rename(oldFileName, newFileName);
        })
        .catch(err => printError(err.message))
};

await rename();