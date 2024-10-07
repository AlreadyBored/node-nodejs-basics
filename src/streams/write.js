import fs, { WriteStream } from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const write = async () => {
    const path = `${__dirname}/files`
    const writeStream = fs.createWriteStream(`${path}/fileWrite.txt`)
    process.stdin.on('data', (chunk) => {
        writeStream.write(chunk.toString())
    })
}

write()
