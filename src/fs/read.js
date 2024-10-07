import { readFile } from 'fs/promises'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const read = async () => {
    const path = `${__dirname}/files/fileToRead.txt`
    const errorMessage = 'FS operation failed'

    try {
        const files = await readFile(path, { encoding: 'UTF-8' })
        console.log(files)
    } catch (error) {
        throw new Error(errorMessage)
    }
}

read()
