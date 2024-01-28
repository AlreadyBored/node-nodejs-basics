import * as fs from 'node:fs/promises'
import { createHash } from 'node:crypto'
import * as path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const calculateHash = async () => {
    // Write your code here

    const fileToCalculateHashFor = path.join(__dirname, './files/fileToCalculateHashFor.txt')
    const filehandle = await fs.open(fileToCalculateHashFor, 'r')
    const readStream = filehandle.createReadStream()
    const hash = createHash('sha256')
    hash.on('finish', () => {
        hash.end()
        console.log(hash.read())
      })

    readStream.pipe(hash).setEncoding('hex')

};

await calculateHash();