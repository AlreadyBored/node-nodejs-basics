import * as fs from 'fs/promises';
import {ERROR_MESSAGES} from "./constants/index.js";

const copy = async () => {
    // Write your code here

    const errMsg = ERROR_MESSAGES.OPERATION_FAILED;
    const existMsg = ERROR_MESSAGES.DESTINATION_EXIST;

    const sourcePath = new URL('./files', import.meta.url);
    const copyPath =  new URL('./files_copy', import.meta.url);

    let isNotExist = false;

    try {
        await fs.stat(copyPath);
        throw new Error(existMsg);
    } catch (err) {
        if (err.message === existMsg) {
            throw new Error(errMsg);
        } else {
            isNotExist = true;
        }
    }

    if (isNotExist) {
        try {
            await fs.cp(sourcePath, copyPath, {
                recursive: true,
            });
        } catch (err) {
            throw new Error(errMsg);
        }
    }

};

await copy();
