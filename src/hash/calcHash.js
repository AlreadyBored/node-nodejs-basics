import { createHash } from 'crypto'
import { readFile } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const dir = dirname(fileURLToPath(import.meta.url))

const pathToFile = `${dir}/files/fileToCalculateHashFor.txt`

const calculateHash = async () => {
  readFile(pathToFile, 'utf-8', (err, data) => {
    if (err) throw new Error('error!')
    const hash = createHash('sha256', data).digest('hex')
    console.log(hash)
  })
}

await calculateHash()
