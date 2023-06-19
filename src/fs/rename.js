import * as fs from "fs";

const rename = async () => {
    const originalFileName = './files/wrongFilename.txt'
    const newFileName = './files/properFilename.md'
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