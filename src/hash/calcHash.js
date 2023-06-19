import crypto from 'crypto'
import fs from 'fs'

const calculateHash = async () => {
    const filePath = new URL('files/fileToCalculateHashFor.txt', import.meta.url)
    const buff = await fs.promises.readFile(filePath)
    const hex = crypto.createHash('sha256').update(buff).digest('hex')
    console.log(hex)
};

await calculateHash();