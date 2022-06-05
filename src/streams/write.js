import { open } from 'fs/promises'
import { stdin } from 'process'

const FILE_TO_WRITE = './files/fileToWrite.txt'

export const write = async () => {
  let fd

  const writableStream = async (data) => {
    try {
      fd = await open(FILE_TO_WRITE, 'a')
      fd.createWriteStream().write(data)
    } catch (error) {
      throw new Error('Error with open file.')
    } finally {
      await fd?.close()
    }
  }

  stdin.on('data', async (chunk) => {
    await writableStream(chunk)
  })
}

write()
