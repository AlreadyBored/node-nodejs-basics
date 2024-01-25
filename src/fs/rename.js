import * as fs from 'fs/promises';
import {ERROR_MESSAGES} from "./constants/index.js";

const isPathExist = async path => {
    let isExist;

    try {
        await fs.stat(path);
        isExist = true;
    } catch (err) {
        isExist = false;
    }

    return isExist;
}

const rename = async () => {
    // Write your code here

    const errMsg = ERROR_MESSAGES.OPERATION_FAILED;
    const sourcePath = 'src/fs/files/wrongFilename.txt';
    const destinationPath = 'src/fs/files/properFilename.md';

    const isDestinationPathExist = await isPathExist(destinationPath);

    if (isDestinationPathExist) {
        throw new Error(errMsg);
    } else {
        try {
            await fs.rename(sourcePath, destinationPath);
        } catch (err) {
            throw new Error(errMsg);
        }
    }

};

await rename();