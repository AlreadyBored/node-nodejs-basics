import { readdir } from 'fs/promises'
import { FileError, checkPathForExistence } from './utils.js'
import { FS_PATH } from './constants.js'

export const list = async () => {
  const { verdict, error } = await checkPathForExistence(FS_PATH)
  if (!verdict) {
    throw new FileError(error)
  }

  try {
    const fileList = await readdir(FS_PATH)
    fileList.forEach((fileName) => console.log(fileName))
  } catch (err) {
    throw new FileError('Error with reading direcory.')
  }
}


list()