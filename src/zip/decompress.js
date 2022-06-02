import { createReadStream, createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { pipeline } from 'node:stream/promises'
import { createUnzip } from 'node:zlib'

export const decompress = async () => {
  const fileToPath = resolve(cwd(), 'src/zip/files', 'archive.gz')
  const fileFromPath = resolve(cwd(), 'src/zip/files', 'fileToCompress.txt')
  const unzip = createUnzip()
  const rs = createReadStream(fileToPath)
  const ws = createWriteStream(fileFromPath)
  await pipeline(rs, unzip, ws)
}

decompress()
