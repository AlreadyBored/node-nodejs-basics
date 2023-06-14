import fs from 'fs';
import ifExists from "./ifExists.js";
const remove = async () => {
    // Write your code here
    const pathToFile = new URL('files_copy/', import.meta.url).pathname.substring(1);
    const targetFile = pathToFile + 'fileToRemove.txt';
    if (!await ifExists(targetFile)){
        throw new Error('FS operation failed');
    }

    await fs.promises.rm(targetFile);
};


await remove();