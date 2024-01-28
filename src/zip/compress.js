import { createReadStream, createWriteStream } from 'node:fs'
import { createGzip } from 'node:zlib'
import { pipeline } from 'stream/promises'

const compress = async () => {
  // Write your code here

  const FILE = './files/fileToCompress.txt'
  const FILE_URL = new URL(FILE, import.meta.url)
  const FILE_ARCHIVE = './files/archive.gz'
  const FILE_ARCHIVE_URL = new URL(FILE_ARCHIVE, import.meta.url)

  await pipeline(
    createReadStream(FILE_URL),
    createGzip(),
    createWriteStream(FILE_ARCHIVE_URL),
  )
}

await compress()
