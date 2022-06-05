import * as stream from 'stream'
import * as fs from 'fs'
import * as zlib from 'zlib'

const fileToCompress = "./src/zip/files/fileToCompress.txt"
const compressedFile = "./src/zip/files/archive.gz"


// Пропускаем поток через zlib в зявисимости от целей. Глубже копнуть в понимании процесса!
export const compress = async () => {
    const gzip = zlib.createGzip()
    const source = fs.createReadStream(fileToCompress)
    const destination = fs.createWriteStream(compressedFile)
    source.pipe(gzip).pipe(destination)
};

compress()