import { stat, rename as renameFile } from 'fs/promises'
import { FileError, checkPathForExistence } from './utils.js'
import { FILE_NAME_TO_RENAME, FILE_NAME_TO_RENAME_NEW } from './constants.js'

export const rename = async () => {
  const { error: errorOldFile } = await checkPathForExistence(
    FILE_NAME_TO_RENAME,
  )
  const { error: errorNewFile } = await checkPathForExistence(
    FILE_NAME_TO_RENAME_NEW,
    false,
  )

  if (errorOldFile || errorNewFile) {
    throw new FileError(errorOldFile || errorNewFile)
  }

  let stats
  try {
    stats = await stat(FILE_NAME_TO_RENAME)
  } catch (error) {
    throw new FileError()
  }

  if (stats.isFile()) {
    try {
      await renameFile(FILE_NAME_TO_RENAME, FILE_NAME_TO_RENAME_NEW)
    } catch (error) {
      throw new FileError('Error occured with rename.')
    }
  } else {
    throw new FileError('File is not a file.')
  }
}

rename()
