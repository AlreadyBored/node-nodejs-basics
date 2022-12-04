import { unlink } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const dir = dirname(fileURLToPath(import.meta.url))

const forRemove = `${dir}/files/fileToRemove.txt`

const errMsg = 'FS operation failed'

const remove = async () => {
  unlink(forRemove, err => {
    if (err) throw new Error(errMsg)
  })
}

await remove()
