import { createReadStream } from 'node:fs'
import { resolve } from 'node:path'
import { cwd, stdout } from 'node:process'
import { pipeline } from 'node:stream/promises'

export const read = async () => {
  const fileToPath = resolve(cwd(), 'src/streams/files', 'fileToRead.txt')
  const rs = createReadStream(fileToPath, { encoding: 'utf8' })
  await pipeline(rs, stdout)
}

read()
