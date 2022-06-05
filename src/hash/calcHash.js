import { createHash  } from 'crypto'
import { readFile } from 'fs/promises'

const FILE_TO_READ = './files/fileToCalculateHashFor.txt'

export const calculateHash = async () => {
  let fileBuffer
  try {
    fileBuffer = await readFile(FILE_TO_READ)
  } catch (err) {
    throw new Error('Error with reading file.')
  }

  const hash = createHash('sha256')
  .update(fileBuffer)
  .digest('hex')
  return hash

}

calculateHash().then(result => console.log(result))


