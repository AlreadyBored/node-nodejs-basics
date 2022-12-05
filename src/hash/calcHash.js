import { getCombinedPath } from '../pathHelper.js'
import { readFile } from 'fs/promises'
import crypto from 'crypto'

const calculateHash = async () => {
    const pathToFile = getCombinedPath(import.meta.url, 'files', 'fileToCalculateHashFor.txt')
    const fileContent = await readFile(pathToFile)

    const hex = crypto.createHash('sha256').update(fileContent).digest('hex')

    console.log(hex)
};

await calculateHash();