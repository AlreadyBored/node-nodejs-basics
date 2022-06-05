import * as stream from 'stream'
import * as fs from 'fs'
import * as zlib from 'zlib'

const fileToCompress = "./src/zip/files/fileToCompress.txt"
const compressedFile = "./src/zip/files/archive.gz"

export const decompress = async () => {
    const unzip = zlib.createUnzip()
    const source = fs.createReadStream(compressedFile)
    const destination = fs.createWriteStream(fileToCompress)
    source.pipe(unzip).pipe(destination)
};
decompress()