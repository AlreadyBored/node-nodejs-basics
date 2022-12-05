import fs from 'fs'
import zlib from 'zlib'

const source = "./src/zip/files/fileToCompress.txt"
const destination = "./src/zip/files/archive.gz"

const compress = async () => {
    let input = fs.createReadStream(source)
    let output = fs.createWriteStream(destination)
    let zip = zlib.createGzip()
    input.pipe(zip).pipe(output)
};

await compress();