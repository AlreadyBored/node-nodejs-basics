import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { createHash } from 'crypto'
import { readFile } from 'fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const calculateHash = async () => {
    try {
        const fileContent = await readFile(
            __dirname + '/files/fileToCalculateHashFor.txt'
        )
        const hash = createHash('sha256').update(fileContent).digest('hex')
        console.log('Hash:' + hash)
    } catch (error) {
        throw new Error(error)
    }
}

calculateHash()
