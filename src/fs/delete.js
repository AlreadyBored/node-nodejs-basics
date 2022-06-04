import {rm} from 'fs/promises';
import {fileURLToPath} from 'url';
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const remove = async () => {
    try {
        await rm(path.join(__dirname, "/files/", "fileToRemove.txt"))
    } catch {
        throw Error("FS operation failed")
    }
};
//remove()