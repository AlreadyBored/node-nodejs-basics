import { createHash } from 'crypto'
import { promises as fs } from 'fs'

const calculateHash = async () => {
    try{
        const buf = await fs.readFile('./src/hash/files/fileToCalculateHashFor.txt', {flag: 'r+', encoding: 'utf-8'})
        console.log(await createHash('sha256').update(buf).digest('hex'))
    }catch{
        throw "FS operation failed"
    }
};

await calculateHash();
