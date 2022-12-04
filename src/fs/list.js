import { readdir } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const dir = dirname(fileURLToPath(import.meta.url))

const filesFolder = `${dir}/files`

const errMsg = 'FS operation failed'

const list = async () => {
  readdir(filesFolder, (err, files) => {
    if (err) throw new Error(errMsg)

    console.log(files)
  })
}

await list()
