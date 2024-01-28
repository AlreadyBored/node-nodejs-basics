import { pipeline } from 'stream/promises'
import { createReadStream, createWriteStream } from 'node:fs'
import { createUnzip } from 'node:zlib'

const decompress = async () => {
  // Write your code here
  const FILE = './files/fileToCompress.txt'
  const FILE_URL = new URL(FILE, import.meta.url)
  const FILE_ARCHIVE = './files/archive.gz'
  const FILE_ARCHIVE_URL = new URL(FILE_ARCHIVE, import.meta.url)

  await pipeline(
    createReadStream(FILE_ARCHIVE_URL),
    createUnzip(),
    createWriteStream(FILE_URL),
  )
}

await decompress()
