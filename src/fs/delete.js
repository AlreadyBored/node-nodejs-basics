import fs from "fs";
import path from "path";

const remove = async () => {
    // Write your code here
    // delete.js - implement function that deletes file fileToRemove.txt
    // (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)

    const file = path.resolve('src', 'fs', 'files', 'fileToRemove.txt')

    try {
        if (!fs.existsSync(file)) throw new Error('FS operation failed')
        await fs.promises.unlink(file)
    } catch (e) {
        console.log(e)
        throw e
    }
};

await remove();