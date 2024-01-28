import { pipeline } from 'stream/promises'
import { createReadStream } from 'node:fs'

const read = async () => {
  // Write your code here

  const FILE = './files/fileToRead.txt'
  const FILE_URL = new URL(FILE, import.meta.url)

  const writableToTerminal = process.stdout
  const readStream = createReadStream(FILE_URL)

  await pipeline(readStream, writableToTerminal)
}

await read()
