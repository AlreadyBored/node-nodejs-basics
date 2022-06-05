import { open } from 'fs/promises'
import { stdout } from 'process'

const FILE_TO_READ = './files/fileToRead.txt'

export const read = async () => {
  try {
    const fd = await open(FILE_TO_READ)
    fd.createReadStream({ start: 0, autoClose: true }).pipe(stdout)
  } catch (error) {
      throw new Error('Error with reading file.')
  }
}

read()
