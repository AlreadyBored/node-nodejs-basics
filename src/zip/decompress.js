import { getCombinedPath } from '../pathHelper.js'
import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'stream'
import { createGunzip } from 'zlib'

const decompress = async () => {
    const pathToArchive = getCombinedPath(import.meta.url, 'files', 'archive.gz')
    const pathToFile = getCombinedPath(import.meta.url, 'files', 'fileToCompress.txt')

    const readableStream = createReadStream(pathToArchive)
    const writableStream = createWriteStream(pathToFile)

    pipeline(readableStream, createGunzip(), writableStream, err => {
        err && console.error(err);
    })
};

await decompress();