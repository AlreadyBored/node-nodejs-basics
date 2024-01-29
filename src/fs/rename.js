import * as fs from "fs";

const rename = async () => {
    // Write your code here
    const fileExistsError = 'FS operation failed'

    // Check if properFilename.md already exists or wrongFilename.txt does not, and if so throw an error
    if (fs.existsSync('./files/properFilename.md') || !fs.existsSync('./files/wrongFilename.txt')) {
        throw new Error(fileExistsError)
    }

    // Rename wrongFilename.txt to properFilename.md
    await fs.promises.rename('./files/wrongFilename.txt','./files/properFilename.md')
};

await rename();