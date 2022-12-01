import fs from "fs";
import path from "path";
import zlib from 'zlib'
import { pipeline, Transform } from 'stream'

const decompress = async () => {
    // Write your code here
    // decompress.js - implement function that decompresses archive.gz
    // back to the fileToCompress.txt with same content as before
    // compression using zlib and Streams API

    const to = path.resolve('src', 'zip', 'files', 'fileToCompress.txt')
    const from = path.resolve('src', 'zip', 'files', 'archive.gz')

    const readStream = fs.createReadStream(from)
    const writeStream = fs.createWriteStream(to)

    const tr = new Transform({
        transform(chunk, encoding, callback) {
            zlib.unzip(chunk, callback)
        }
    })

    pipeline(readStream, tr, writeStream, () => {})
};

await decompress();