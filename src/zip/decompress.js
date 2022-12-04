import { createUnzip } from 'zlib'
import { createReadStream, createWriteStream } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const dir = dirname(fileURLToPath(import.meta.url))

const decompress = async () => {
  const writeStream = createWriteStream(`${dir}/files/fileToCompress.txt`)
  const readStream = createReadStream(`${dir}/files/archive.gz`)

  const unzip = createUnzip()

  readStream.pipe(unzip).pipe(writeStream)
}

await decompress()
