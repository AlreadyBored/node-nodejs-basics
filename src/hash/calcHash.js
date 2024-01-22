import { readFile } from 'fs/promises'
import { createHash } from 'crypto'
import { join } from 'path'
import { getDirname } from '../dirname.js'
import { pathToFileURL } from 'url';

const __dirname = getDirname(import.meta.url)
const calculateHash = async () => {
    const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt')
    const res = await readFile(filePath)
    const hash = createHash('sha256').update(res).digest('hex')
    console.log(hash)
};

await calculateHash();