import { fileURLToPath } from "url";
import { dirname } from "path";
import { rename as doRename } from "fs/promises";

const rename = async () => {
    // Write your code here 
    const filePath = fileURLToPath(import.meta.url);
    const dirPath = dirname(filePath) + "/files";
    const errMsg = 'FS operation failed'

    try {
        await doRename(dirPath + '/wrongFilename.txt', dirPath + '/properFilename.md')
    } catch (err) {
        throw new Error(errMsg);
    }
};

await rename();