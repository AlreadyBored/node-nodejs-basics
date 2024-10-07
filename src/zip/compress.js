import fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { createGzip } from 'zlib'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const compress = async () => {
    const path = `${__dirname}/files`
    const gZip = createGzip()
    const writeStream = fs.createWriteStream(`${path}/archive.gz`)
    const readStream = fs.createReadStream(`${path}/fileToCCCC.txt`)
    readStream.pipe(gZip).pipe(writeStream)
}
compress()
