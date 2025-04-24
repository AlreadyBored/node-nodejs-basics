import * as fs from "fs/promises";

const rename = async () => {
    // Write your code here 
    const oldPath = './src/fs/files/wrongFilename.txt'
    const newPath = './src/fs/files/properFilename.md'

    if (await fileExists(newPath) === true) {
        throw new Error('FS operation failed', { cause: 'Cannot rename. File allready exists: ' + newPath })
    }

    if (await fileExists(oldPath) === false) {
        throw new Error('FS operation failed', { cause: 'Cannot rename. File does not exists: ' + oldPath })
    }

    try {
        await fs.rename(oldPath, newPath)
        console.log('Rename complete')
    } catch (error) {
        throw new Error('FS operation failed', { cause: error })
    }
}

async function fileExists(fileName) {
    try {
        await fs.stat(fileName)
        return true
    } catch (error) {
        return false
    }
}

await rename();