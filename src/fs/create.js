import { writeFile, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const dir = dirname(fileURLToPath(import.meta.url))

const freshFile = `${dir}/files/fresh.txt`

const str = 'I am fresh and young'
const errMsg = 'FS operation failed'

const create = async () => {
  if (existsSync(freshFile)) throw new Error(errMsg)

  writeFile(freshFile, str, err => {
    if (err) throw new Error(errMsg)
    console.log('File create')
  })
}

await create()
