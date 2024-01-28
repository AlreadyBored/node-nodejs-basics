import { readdir } from 'node:fs/promises'
import { MESSAGES } from '../utils.js'

const list = async () => {
  // Write your code here

  const FOLDER = './files'
  const FOLDER_URL = new URL(FOLDER, import.meta.url)

  try {
    const files = await readdir(FOLDER_URL)
    for (const file of files) console.log(file)
  } catch (err) {
    throw Error(MESSAGES.error)
  }
}

await list()
