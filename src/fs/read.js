import { readFile } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const dir = dirname(fileURLToPath(import.meta.url))

const rf = `${dir}/files/fileToRead.txt`

const errMsg = 'FS operation failed'

const read = async () => {
  readFile(rf, 'utf-8', (err, data) => {
    if (err) throw new Error(errMsg)

    console.log(data)
  })
}

await read()
