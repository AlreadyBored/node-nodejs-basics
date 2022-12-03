import path from "path"
import {isExist, createFile} from "./services/fs.service.js"
import {FILES_FOLDER_PATH} from "./constants/fs.constants.js"
import {printError} from "./services/log.service.js";

const freshFile = "fresh.txt";
const filesFolderPath = path.join(FILES_FOLDER_PATH, freshFile);
const fileData = 'I am fresh and young';
const create = async (path) => {
    // Write your code here
    await isExist(path)
        .then((res) => {
            if(res) throw new Error('FS operation failed');
            return createFile(path, fileData);
        })
        .catch(err => printError(err.message))
};

await create(filesFolderPath);