import zlib from 'zlib'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const compress = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    const zip = zlib.createGzip()
    const read = fs.createReadStream(__dirname + '\\files\\fileToCompress.txt')
    const write = fs.createWriteStream(__dirname + '\\files\\archive.gz')

    read.pipe(zip).pipe(write)
}
