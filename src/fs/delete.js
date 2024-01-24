import * as fs from 'fs/promises';
import {ERROR_MESSAGES} from "./constants/index.js";

const remove = async () => {
    // Write your code here

    // delete.js - implement function that deletes file fileToRemove.txt
    // (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)

    const errMsg = ERROR_MESSAGES.OPERATION_FAILED;

    try {
        await fs.unlink('src/fs/files/fileToRemove.txt');
    } catch (err) {
        throw new Error(errMsg);
    }
};

await remove();