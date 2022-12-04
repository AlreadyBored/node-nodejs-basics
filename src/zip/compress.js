import { createGzip } from 'zlib'
import { createReadStream, createWriteStream } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const dir = dirname(fileURLToPath(import.meta.url))

const compress = async () => {
  const readStream = createReadStream(`${dir}/files/fileToCompress.txt`)
  const writeStream = createWriteStream(`${dir}/files/archive.gz`)

  const gzip = createGzip()
  readStream.pipe(gzip).pipe(writeStream)
}

await compress()
