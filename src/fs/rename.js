import * as fs from "fs";

const rename = async () => {
    const originalFileName = './files/wrongFilename.txt'
    const newFileName = './files/properFilename.md'
    const errorMessage = 'FS operation failed'


    const checkOriginalFileName = fs.existsSync(originalFileName)

    if (!checkOriginalFileName) {
        throw new Error(errorMessage)
    }

    const checkNewFileName = fs.existsSync(newFileName)

    if (checkNewFileName) {
        throw new Error(errorMessage)
    }

    fs.rename(originalFileName, newFileName, (err => {
        if (err) throw err
    }))

};

await rename();