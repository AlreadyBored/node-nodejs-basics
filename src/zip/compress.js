import { createGzip } from 'node:zlib'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { createReadStream, createWriteStream } from 'node:fs'
const compress = async () => {
    const sourceFile = join(
        dirname(fileURLToPath(import.meta.url)),
        'files',
        'fileToCompress.txt'
    )
    const zipFile = join(
        dirname(fileURLToPath(import.meta.url)),
        'files',
        'archive.gz'
    )
    const sourceStream = createReadStream(sourceFile)
    const zipStream = createWriteStream(zipFile)
    sourceStream.pipe(createGzip()).pipe(zipStream)
}

await compress()
