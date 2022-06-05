import { getFileDirName } from '../utils/utils.js'
import { join } from 'path'
import { createHash } from 'crypto'
import { readFile } from 'fs/promises'

export const calculateHash = async () => {
    try {
        const { __dirname } = await getFileDirName(import.meta.url)
        const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt')
        const fileBuffer = await readFile(filePath, 'utf-8')
        const hashSum = createHash('sha256')
        hashSum.update(fileBuffer)
        console.log(hashSum.digest('hex'))
    }
    catch(err) {
        console.error(err)
    }
}

calculateHash()
