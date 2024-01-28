import { readFile } from 'node:fs/promises'
import { MESSAGES } from '../utils.js'

const read = async () => {
  // Write your code here
  const READ_FILE_NAME = './files/fileToRead2.txt'
  const READ_FILE_NAME_URL = new URL(READ_FILE_NAME, import.meta.url)
  try {
    const contents = await readFile(READ_FILE_NAME_URL, { encoding: 'utf8' })
    console.log(contents)
  } catch (err) {
    throw Error(MESSAGES.error)
  }
}

await read()
