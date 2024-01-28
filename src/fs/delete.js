import * as fs from 'node:fs/promises'
import * as path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const remove = async () => {
    // Write your code here

    const fileToRemove = path.join(__dirname, './files/fileToRemove.txt')

    const fileExistsFunc = async (file) => {
        try {
            await fs.access(file)
        } catch {
            return false
        }
        return true
    }
        
    try {
        const fileExists = await fileExistsFunc(fileToRemove)
        if (fileExists) {
            await fs.unlink(fileToRemove)
        } else {
            throw new Error('FS operation failed')
        }
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await remove();