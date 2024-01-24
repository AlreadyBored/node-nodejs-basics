import * as fs from 'fs/promises';
import {ERROR_MESSAGES} from "./constants/index.js";

const copy = async () => {
    // Write your code here

    const errMsg = ERROR_MESSAGES.OPERATION_FAILED;
    const existMsg = ERROR_MESSAGES.DESTINATION_EXIST;
    const copyPath = 'src/fs/files_copy';

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
            await fs.cp('src/fs/files', copyPath, {
                recursive: true,
            });
        } catch (err) {
            throw new Error(errMsg);
        }
    }

};

await copy();
