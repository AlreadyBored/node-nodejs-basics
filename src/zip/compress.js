import { createGzip } from 'zlib'
import { createWriteStream, createReadStream } from 'fs'
import { pipeline } from 'stream'
import { unlink } from "fs/promises";

const file = './files/fileToCompress.txt'
const archive = './files/archive.gz'

const compress = async () => {
    const readStream = createReadStream(file)
    const writeStream = createWriteStream(archive)
    const gzip = createGzip()

    pipeline(readStream, gzip, writeStream, (err) => {
        if (!err) {
            unlink(file)
        }
    })
};

await compress();