import * as fs from 'fs/promises';
import {ERROR_MESSAGES} from "./constants/index.js";

const create = async () => {
    // Write your code here

    const errMsg = ERROR_MESSAGES.OPERATION_FAILED;

    try {
        await fs.writeFile('src/fs/files/fresh.txt', 'I am fresh and young', { flag: 'wx'});
    } catch (err) {
        throw new Error(errMsg);
    }

};

await create();