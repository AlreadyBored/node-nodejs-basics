import * as fs from 'fs/promises';
import {ERROR_MESSAGES} from "./constants/index.js";

const list = async () => {
    // Write your code here

    const errMsg = ERROR_MESSAGES.OPERATION_FAILED;
    const sourcePath = new URL('./files', import.meta.url);

    try {
        const files = await fs.readdir(sourcePath);
        console.log(files);
    } catch (err) {
        throw new Error(errMsg);
    }
};

await list();