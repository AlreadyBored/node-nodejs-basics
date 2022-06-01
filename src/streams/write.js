import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { cwd, stdin } from 'node:process'
import { pipeline } from 'node:stream/promises'

export const write = async () => {
  const fileToPath = resolve(cwd(), 'src/streams/files', 'fileToWrite.txt')
  const ws = createWriteStream(fileToPath)
  await pipeline(stdin, ws)
}

write()
