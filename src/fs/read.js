import { readFile } from 'fs/promises'
import { FileError, checkPathForExistence } from './utils.js'
import { FILE_TO_READ } from './constants.js'

export const read = async () => {
  const { verdict, error } = await checkPathForExistence(FILE_TO_READ)
  if (!verdict) {
    throw new FileError(error)
  }

  try {
    const text = await readFile(FILE_TO_READ)
    console.log(text.toString())
  } catch (err) {
    throw new FileError('Error with reading file.')
  }
}

read()
