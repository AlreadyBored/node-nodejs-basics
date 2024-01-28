import { readFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
const calculateHash = async () => {
  // Write your code here
  const FILE_PATH = './files/fileToCalculateHashFor.txt'
  const FILE_URL = new URL(FILE_PATH, import.meta.url)

  const data = await readFile(FILE_URL)
  console.log(createHash('sha256').update(data).digest('hex').trim())
}

await calculateHash()
