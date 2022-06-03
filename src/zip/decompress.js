import zlib from 'zlib'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)

    const zip = zlib.createUnzip()
    const read = fs.createReadStream(__dirname + '\\files\\archive.gz')
    const write = fs.createWriteStream(
        __dirname + '\\files\\fileToCompress.txt'
    )

    read.pipe(zip).pipe(write)
}
