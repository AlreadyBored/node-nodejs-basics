import {fileURLToPath} from "url";
import path from "node:path";
import fs from "node:fs/promises";

const list = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename)
    const fullPath = path.join(__dirname, 'files')
    const isFolderExists = await fs.access(fullPath, fs.constants.R_OK | fs.constants.W_OK)
        .then(() => true)
        .catch(() => false)
    if (!isFolderExists) {
        throw new Error('FS operation failed')
    } else {
        const arr = await fs.readdir(fullPath);
        console.log(arr)
    }
};

await list();