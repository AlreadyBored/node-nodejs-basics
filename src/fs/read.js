import {fileURLToPath} from "url";
import path from "node:path";
import fs from "node:fs/promises";

const read = async () => {
    // Write your code here
    const fileName = 'fileToRead.txt'
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename)
    const fullPath = path.join(__dirname, 'files', fileName)
    const isFileExists = await fs.access(fullPath, fs.constants.R_OK | fs.constants.W_OK)
        .then(() => true)
        .catch(() => false)
    if (!isFileExists) {
        throw new Error('FS operation failed')
    } else {
        const content = await fs.readFile(fullPath, { encoding: 'utf8' })
        console.log(content)
    }
};

await read();