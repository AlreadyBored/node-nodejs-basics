import * as fs from 'fs/promises';
import {ERROR_MESSAGES} from "./constants/index.js";

const remove = async () => {
    // Write your code here

    const errMsg = ERROR_MESSAGES.OPERATION_FAILED;

    try {
        await fs.unlink('src/fs/files/fileToRemove.txt');
    } catch (err) {
        throw new Error(errMsg);
    }
};

await remove();