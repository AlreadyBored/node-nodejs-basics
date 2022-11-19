import {fileURLToPath} from "url";
import path from "node:path";
import fs from "node:fs/promises";

const copy = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename)
    const fullPathFrom = path.join(__dirname, 'files')
    const fullPathTo = path.join(__dirname, 'files_copy')
    const isFilesFolderExists = await fs.access(fullPathFrom, fs.constants.R_OK | fs.constants.W_OK)
        .then(() => true)
        .catch(() => false)
    const isFilesCopyFolderExists = await fs.access(fullPathTo, fs.constants.R_OK | fs.constants.W_OK)
        .then(() => true)
        .catch(() => false)
    if (!isFilesFolderExists || isFilesCopyFolderExists) {
        throw new Error('FS operation failed')
    } else {
        await fs.mkdir(fullPathTo, {recursive: true})
        await fs.cp(fullPathFrom, fullPathTo, {recursive: true})
    }
};

await copy();

