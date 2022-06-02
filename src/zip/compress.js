import { createReadStream, createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { pipeline } from 'node:stream/promises'
import { createGzip } from 'node:zlib'

export const compress = async () => {
  const fileToPath = resolve(cwd(), 'src/zip/files', 'fileToCompress.txt')
  const fileFromPath = resolve(cwd(), 'src/zip/files', 'archive.gz')
  const gzip = createGzip()
  const rs = createReadStream(fileToPath)
  const ws = createWriteStream(fileFromPath)
  await pipeline(rs, gzip, ws)
}

compress()
