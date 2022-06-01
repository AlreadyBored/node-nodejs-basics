import { createReadStream } from 'node:fs'
import { resolve } from 'node:path'
import { cwd, stdout } from 'node:process'
import { pipeline } from 'node:stream/promises'

export const read = async () => {
  try {
    const fileToPath = resolve(cwd(), 'src/fs/files', 'fileToRead.txt')
    const rs = createReadStream(fileToPath, {
      encoding: 'utf8',
    })
    await pipeline(rs, stdout)
  } catch (error) {
    console.error('FS operation failed')
  }
}

read()
