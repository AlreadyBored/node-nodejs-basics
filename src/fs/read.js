import * as fs from 'fs/promises';
import {ERROR_MESSAGES} from "./constants/index.js";

const read = async () => {
    // Write your code here

    const errMsg = ERROR_MESSAGES.OPERATION_FAILED;
    const sourcePath = 'src/fs/files/fileToRead.txt';

    try {
        const content = await fs.readFile(sourcePath);
        console.log(content.toString('utf8'));
    } catch (err) {
        throw new Error(errMsg);
    }
};

await read();