import { fileURLToPath } from "url";
import { dirname, join } from "path"
import { writeFile } from "fs/promises";

const create = async () => {
    const filePath = fileURLToPath(import.meta.url);
    const dirPath = dirname(filePath)
    const data = 'I am fresh and young';
    const errMsg = 'FS operation failed'
    // Write your code here 
    try {
        await writeFile(
            join(dirPath, "files", 'fresh.txt'),
            data,
            { flag: 'wx'  /* wx write data if file does not exist if file exist throw err */ })
    } catch (err) {
        throw new Error(errMsg);
    }
};

await create();