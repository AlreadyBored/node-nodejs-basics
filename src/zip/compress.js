import { createGzip } from 'zlib'
import { createWriteStream, createReadStream } from 'fs'
import { pipeline } from 'stream'
import { unlink } from "fs/promises";

const file = new URL('./files/fileToCompress.txt', import.meta.url)
const archive = new URL('./files/archive.gz', import.meta.url)

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