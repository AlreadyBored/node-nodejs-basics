import fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { createUnzip } from 'zlib'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const decompress = async () => {
    const path = `${__dirname}/files`
    const unzip = createUnzip()
    const readStream = fs.createReadStream(`${path}/archive.gz`)
    const writeStream = fs.createWriteStream(`${path}/fileToCCCC.txt`)
    readStream.pipe(unzip).pipe(writeStream)
}

decompress()
