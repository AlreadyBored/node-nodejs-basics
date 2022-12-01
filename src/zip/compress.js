import fs from "fs";
import path from "path";
import zlib from 'zlib'
import { pipeline } from 'stream'

const compress = async () => {
    // Write your code here
    // compress.js - implement function that compresses file
    // fileToCompress.txt to archive.gz using zlib and Streams API

    const from = path.resolve('src', 'zip', 'files', 'fileToCompress.txt')
    const to = path.resolve('src', 'zip', 'files', 'archive.gz')

    const readStream = fs.createReadStream(from)
    const writeStream = fs.createWriteStream(to)

    pipeline(readStream, zlib.createGzip(), writeStream, () => {})
};

await compress();