import * as crypto from 'crypto'
import * as fs from 'fs'


export const calculateHash = async () => {
    const data = fs.readFileSync('./files/fileToCalculateHashFor.txt')
    const hash = crypto.createHash('sha256')
        .update(data)
        .digest('hex')
    return hash
}
