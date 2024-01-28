import { createWriteStream } from 'node:fs'
import { pipeline } from 'stream/promises'

const write = async () => {
  // Write your code here

  const FILE = './files/fileToWrite.txt'
  const FILE_URL = new URL(FILE, import.meta.url)

  const readableFromTerminal = process.stdin
  const writeStream = createWriteStream(FILE_URL, { flags: 'a' })

  await pipeline(readableFromTerminal, writeStream)
}

await write()
