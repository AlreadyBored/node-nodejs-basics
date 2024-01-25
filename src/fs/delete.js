import * as fs from 'fs/promises';
import {ERROR_MESSAGES} from "./constants/index.js";

const remove = async () => {
    // Write your code here

    const errMsg = ERROR_MESSAGES.OPERATION_FAILED;
    const path = new URL('./files/fileToRemove.txt', import.meta.url);

    try {
        await fs.unlink(path);
    } catch (err) {
        throw new Error(errMsg);
    }
};

await remove();