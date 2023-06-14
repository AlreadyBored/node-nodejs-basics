import fs from 'fs';
import ifExists from "./ifExists.js";
const rename = async () => {
    // Write your code here
    const pathToFile = new URL('files_copy/', import.meta.url).pathname.substring(1);
    console.log(pathToFile)
    const targetNameOne = pathToFile + 'wrongFileName.txt';
    const targetNameTwo = pathToFile + 'wrongFileName.md';
    if (!await ifExists(targetNameOne) || await ifExists(targetNameTwo)){
        throw new Error('FS operation failed');
    }

    await fs.promises.rename(targetNameOne, targetNameTwo);
};

await rename();