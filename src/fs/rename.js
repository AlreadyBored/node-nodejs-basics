import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const dir = dirname(fileURLToPath(import.meta.url))

const wrongFilename = `${dir}/files/wrongFilename.txt`
const properFilename = `${dir}/files/properFilename.md`

const errMsg = 'FS operation failed'

const rename = async () => {
  fs.rename(wrongFilename, properFilename, err => {
    if (err) throw new Error(errMsg)
  })
}

await rename()
