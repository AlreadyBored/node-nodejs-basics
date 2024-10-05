import { access, readFile } from 'fs/promises'
import { createHash } from 'crypto'

const calculateHash = async () => {
    try {
        await access('files/fileToCalculateHashFor.txt')
        const data = await readFile('files/fileToCalculateHashFor.txt')
        const hash = createHash('sha256')
        console.log(hash.update(data).digest('hex'))
    } catch(e) {
        throw new Error(e)
    }

};

await calculateHash();