import fs from "node:fs/promises";

// delete.js - implement function that deletes file 
// fileToRemove.txt (if there's no file fileToRemove.txt 
// Error with message FS operation failed must be thrown)

const remove = async () => {
    // Write your code here
    const pathToFile = './files';
    const fileName = 'fileToRemove.txt';

    const fullPath = `${pathToFile}/${fileName}`;
    const errorMessage = 'FS operation failed';

    try {
        await fs.access(fullPath);
        await fs.rm(fullPath);
    } catch (error) {
        throw new Error(errorMessage);
    }
};

await remove();
