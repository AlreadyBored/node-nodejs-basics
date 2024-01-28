import { readFile, stat } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url"

const read = async () => {
    // Write your code here 
    const filesPath = await fileURLToPath(import.meta.url);
    const dirPath = dirname(filesPath);
    const errMsg = "FS operation failed";
    try {
        await stat(dirPath + '/files/fileToRead.txt')
        console.log(await readFile(dirPath + '/files/fileToRead.txt', { encoding: 'utf-8' }));
    } catch (err) {
        throw new Error(errMsg)
    }

};

await read();