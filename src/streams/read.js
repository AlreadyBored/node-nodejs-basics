import fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const read = async () => {
    const path = `${__dirname}/files`
    const stream = fs.createReadStream(`${path}/fileToRead.txt`, 'utf-8')
    stream.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
}

read()
