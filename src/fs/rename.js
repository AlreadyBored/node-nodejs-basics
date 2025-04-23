import * as fs from "fs/promises";
import * as fsSync from "fs"

const rename = async () => {
    // Write your code here 
    const oldPath = './src/fs/files/wrongFilename.txt'
    const newPath = './src/fs/files/properFilename.md'

    if (fileExists(oldPath)) {
        if (fileExists(newPath)) {
            console.log('Cannot rename. File allready exists: ', newPath)
        }
        else {
            try {
                await fs.rename(oldPath, newPath)
                console.log('Rename complete')
            } catch (error) {
                console.log('Error: FS operation failed: ', error)
            }
        }
    }
    else {
        console.log('Cannot rename. File does not exist: ', oldPath)
    }

};

function fileExists(fileName) {
    try {
        const exist = fsSync.existsSync(fileName)
        console.log('exist: ', exist, fileName )
        return exist
    } catch (error) {
        console.log('Error: FS operation failed: ', error)
    }
}

await rename();