import { fileURLToPath } from "url";
import { dirname } from "path";
import { unlink } from "fs/promises";

const remove = async () => {
    // Write your code here 
    const filePath = fileURLToPath(import.meta.url);
    const dirPath = dirname(filePath) + "/files";
    const errMsg = 'FS operation failed'

    try {
        await unlink(dirPath + '/fileToRemove.txt');
    } catch (err) {
        throw new Error(errMsg);
    }
};

await remove();