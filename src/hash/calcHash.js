import { createReadStream } from 'node:fs'
import { resolve } from 'node:path'
import { cwd, stdout } from 'node:process'
import { pipeline } from 'node:stream/promises'

const { createHash } = await import('node:crypto')

export const calculateHash = async () => {
  const hash = createHash('sha256')

  const fileToPath = resolve(
    cwd(),
    'src/hash/files',
    'fileToCalculateHashFor.txt'
  )

  const rs = createReadStream(fileToPath)
  await pipeline(rs, hash.setEncoding('hex'), stdout)
}

calculateHash()
