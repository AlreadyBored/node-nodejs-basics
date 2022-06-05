import { rm } from "fs/promises"
import { dirname } from "path";
import { fileURLToPath } from "url";

const fileToDeletePath = dirname(fileURLToPath(import.meta.url)) + '/files/fileToRemove.txt';

export const remove = async () => {
    try {
        await rm(fileToDeletePath);
    } catch (err) {
        if (err.code === "ENOENT") {
         throw new Error('FS operation failed');
        }
        else {
            console.log('Some error ocured, error: ' + err)
        }
    }
};
