import { constants } from 'fs'
import { access } from 'fs/promises'

const errorMessage = ' FS operation failed.'

export class FileError extends Error {
  constructor(message = '') {
    super(`${errorMessage} ${message}`)
    this.name = 'FileError'
  }
}

export const checkPathForExistence = async (path, isExist = false) => {
  const errors = {
    true: 'File has already been created',
    false: 'File does not exist',
  }
  try {
    await access(path, constants.F_OK)
    if (isExist) {
      throw new Error()
    }
  } catch (error) {
    if (error.message === '') {
      throw new FileError(errors[isExist])
    }
  }
}
