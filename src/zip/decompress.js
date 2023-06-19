import { createGunzip } from 'node:zlib'
import { pipeline } from 'node:stream/promises'
import {
    createReadStream,
    createWriteStream,
} from 'node:fs'

const decompress = async () => {
    const gunzip = createGunzip()
    const source = createReadStream('src/zip/files/archive.gz')
    const destination = createWriteStream('src/zip/files/decompress.txt')

    await pipeline(source, gunzip, destination)
};

await decompress();
