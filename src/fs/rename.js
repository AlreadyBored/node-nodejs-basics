import * as fs from 'node:fs/promises'
import * as path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rename = async () => {
    // Write your code here

    const fileToRename = path.join(__dirname, './files/wrongFilename.txt')
    const renamedFile = path.join(__dirname, './files/properFilename.md')
    
    const fileExistsFunc = async (file) => {
        try {
            await fs.access(file)
        } catch {
            return false
        }
        return true
    }

    const fileToRenameExists = await fileExistsFunc(fileToRename)
    const renamedFileExists = await fileExistsFunc(renamedFile)

    try {
        if (fileToRenameExists && !renamedFileExists) {
            await fs.rename(fileToRename, renamedFile)
        } else {
            throw new Error('FS operation failed')
        }
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await rename();