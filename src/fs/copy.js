import { stat, cp } from 'fs/promises'
import { FileError, checkPathForExistence } from './utils.js'
import {
  FOLDER_COPY_NAME_NEW,
  FS_PATH,
} from './constants.js'

export const copy = async () => {
  await checkPathForExistence(FS_PATH)
  await checkPathForExistence(FOLDER_COPY_NAME_NEW, true)

  let stats
  try {
    stats = await stat(FS_PATH)
  } catch (error) {
    throw new FileError()
  }

  if (stats.isDirectory()) {
    try {
        await cp(FS_PATH, FOLDER_COPY_NAME_NEW, {recursive: true})
    } catch (error) {
        
    }
  } else {
    throw new FileError('File is not a folder.')
  }
}

copy()
