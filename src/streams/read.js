import { createReadStream } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const dir = dirname(fileURLToPath(import.meta.url))

const read = async () => {
  const readStream = createReadStream(`${dir}/files/fileToRead.txt`, 'utf-8')
  readStream.pipe(process.stdout)
}

await read()
