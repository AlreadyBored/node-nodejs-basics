import * as fs from 'node:fs/promises'
import * as path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const read = async () => {
    // Write your code here

    const fileToCalculateHashFor = path.join(__dirname, './files/fileToCalculateHashFor.txt')
    const filehandle = await fs.open(fileToCalculateHashFor, 'r')
    const readStream = filehandle.createReadStream()
    console.log(readStream.pipe(hash).setEncoding('hex').pipe(stdout))

};

await read();