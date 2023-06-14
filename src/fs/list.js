import { fileURLToPath } from "url";
import { dirname } from "path";
import { readdir, stat } from "fs/promises";
const list = async () => {
    // Write your code here 
    const filePath = fileURLToPath(import.meta.url);
    const dirPath = dirname(filePath) + "/files";
    const errMsg = 'FS operation failed'

    try {
        await stat(dirPath)
        console.log(await readdir(dirPath))
    } catch (err) {
        console.log(err);
        throw new Error(errMsg);
    }
};

await list();