import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createReadStream, createWriteStream } from 'node:fs'
import { createGunzip } from 'node:zlib'

const decompress = async () => {
    const decompressedFile = join(
        dirname(fileURLToPath(import.meta.url)),
        'files',
        'fileToCompress.txt'
    )
    const compressedFile = join(
        dirname(fileURLToPath(import.meta.url)),
        'files',
        'archive.gz'
    )
    const compressedStream = createReadStream(compressedFile)
    const decompressedStream = createWriteStream(decompressedFile)
    compressedStream.pipe(createGunzip()).pipe(decompressedStream)
}

await decompress()
