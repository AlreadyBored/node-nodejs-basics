import * as fs from 'node:fs/promises'
import * as path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const read = async () => {
    // Write your code here

    const fileToRead = path.join(__dirname, './files/fileToRead.txt')

    try {
        const fileData = await fs.readFile(fileToRead, 'utf8')
        console.log(fileData)
    } catch {
        throw new Error('FS operation failed')
    }
};

await read();