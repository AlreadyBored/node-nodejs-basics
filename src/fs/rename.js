import { rename as renameFS, access, constants } from 'node:fs/promises'
import { MESSAGES } from '../utils.js'

const rename = async () => {
  // Write your code here

  const WRONG_FILE_NAME = './files/wrongFilename.txt'
  const WRONG_FILE_NAME_URL = new URL(WRONG_FILE_NAME, import.meta.url)
  const RIGHT_FILE_NAME = './files/properFilename.md'
  const RIGHT_FILE_NAME_URL = new URL(RIGHT_FILE_NAME, import.meta.url)

  try {
    await access(WRONG_FILE_NAME_URL, constants.F_OK)
  } catch (e) {
    throw Error(MESSAGES.error)
  }

  let rightFileExist = true
  try {
    await access(RIGHT_FILE_NAME_URL, constants.F_OK)
  } catch (e) {
    rightFileExist = false
  }

  if (rightFileExist) {
    throw Error(MESSAGES.error)
  }

  await renameFS(WRONG_FILE_NAME_URL, RIGHT_FILE_NAME_URL).catch(() => {
    throw Error(MESSAGES.error)
  })
}

await rename()
