import { createWriteStream } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const dir = dirname(fileURLToPath(import.meta.url))

const write = async () => {
  const writeStream = createWriteStream(`${dir}/files/fileToWrite.txt`, 'utf-8')
  process.stdin.pipe(writeStream)
}

await write()
