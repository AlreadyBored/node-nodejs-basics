import { rm } from 'fs/promises'
import { FileError, checkPathForExistence } from './utils.js'
import { FILE_TO_REMOVE } from './constants.js'

export const remove = async () => {
  const { verdict, error } = await checkPathForExistence(FILE_TO_REMOVE)
  if(!verdict) {
    throw new FileError(error)
  }

  try {
      await rm(FILE_TO_REMOVE)
  } catch (error) {
    throw new FileError('Error occured with remove.')
  }

}


remove()