import {fileURLToPath} from "url";
import path from "node:path";
import fs from "node:fs/promises";

const rename = async () => {
    // Write your code here
    const wrongFilename = 'wrongFilename.txt'
    const correctFilename = 'properFilename .txt'
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename)
    const fullPathWrongFile = path.join(__dirname, 'files', wrongFilename)
    const fullPathCorrectFile = path.join(__dirname, 'files', correctFilename)
    const isWrongFileExists = await fs.access(fullPathWrongFile, fs.constants.R_OK | fs.constants.W_OK)
        .then(() => true)
        .catch(() => false)
    const isCorrectFileExists = await fs.access(fullPathCorrectFile, fs.constants.R_OK | fs.constants.W_OK)
        .then(() => true)
        .catch(() => false)
    if (isCorrectFileExists || !isWrongFileExists) {
        throw new Error('FS operation failed')
    } else {
        await fs.rename(fullPathWrongFile, fullPathCorrectFile)
    }
};

await rename();

