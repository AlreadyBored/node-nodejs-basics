import { rm } from 'node:fs/promises'
import { MESSAGES } from '../utils.js'

const remove = async () => {
  // Write your code here
  const DELETE_FILE_NAME = './files/fileToRemove.txt'
  const DELETE_FILE_NAME_URL = new URL(DELETE_FILE_NAME, import.meta.url)

  try {
    await rm(DELETE_FILE_NAME_URL)
  } catch (e) {
    throw Error(MESSAGES.error)
  }
}

await remove()
