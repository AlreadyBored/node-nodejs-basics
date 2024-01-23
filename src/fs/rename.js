import * as fs from "fs";
import path from "path";
import url from "url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const rename = async () => {
    const originalFileName = path.join(__dirname, './files/wrongFilename.txt')
    const newFileName = path.join(__dirname, './files/properFilename.md')

    const doesNotExistErr = 'FS operation failed: The file does not exist'
    const alreadyExistErr = 'FS operation failed: The folder already exists'

    const checkOriginalFileName = fs.existsSync(originalFileName)

    if (!checkOriginalFileName) {
        throw new Error(doesNotExistErr)
    }

    const checkNewFileName = fs.existsSync(newFileName)

    if (checkNewFileName) {
        throw new Error(alreadyExistErr)
    }

    fs.rename(originalFileName, newFileName, (err => {
        if (err) throw err
    }))
};

await rename();