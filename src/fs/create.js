import * as fs from 'node:fs/promises'
import * as path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const create = async () => {
    // Write your code here
    const newTextFile = path.join(__dirname, './files/fresh.txt')
    
    const fileExistsFunc = async (file) => {
        try {
            await fs.access(file)
        } catch {
            return false
        }
        return true
    }
    
    try {
        const fileExists = await fileExistsFunc(newTextFile)
        if (!fileExists) {
            await fs.writeFile(newTextFile, "I am fresh and young")
        } else {
            throw new Error('FS operation failed')
        }
    } catch (error) {
        throw new Error('FS operation failed')
    }
};

await create();