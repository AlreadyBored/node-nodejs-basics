import { getCombinedPath } from '../pathHelper.js'
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream'
import { createGzip } from 'zlib'

const compress = async () => {
    const pathToFile = getCombinedPath(import.meta.url, 'files', 'fileToCompress.txt')
    const pathToArchive = getCombinedPath(import.meta.url, 'files', 'archive.gz')

    const readableStream = createReadStream(pathToFile)
    const writableStream = createWriteStream(pathToArchive)

    pipeline(readableStream, createGzip(), writableStream, err => {
        err && console.error(err);
    })
};

await compress();