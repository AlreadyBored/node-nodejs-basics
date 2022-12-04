import { existsSync, mkdir, readdir, copyFile } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const dir = dirname(fileURLToPath(import.meta.url))

const filesFolder = `${dir}/files`
const filesCopyFolder = `${dir}/files_copy`

const errMsg = 'FS operation failed'

const copy = async () => {
  if (existsSync(filesCopyFolder)) throw new Error(errMsg)

  mkdir(filesCopyFolder, cb => {})

  readdir(filesFolder, (err, files) => {
    files.map(i =>
      copyFile(`${filesFolder}/${i}`, `${filesCopyFolder}/${i}`, cb => {})
    )
  })
}

copy()
