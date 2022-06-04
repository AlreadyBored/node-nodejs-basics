import { stat, cp } from 'fs/promises'
import { FileError, checkPathForExistence } from './utils.js'
import { FILE_NAME_TO_RENAME, FILE_NAME_TO_RENAME_NEW } from './constants.js'

export const rename = async () => {
  await checkPathForExistence('ergerg')
  await checkPathForExistence(FILE_NAME_TO_RENAME_NEW)

//   let stats
//   try {
//     stats = await stat(FS_PATH)
//   } catch (error) {
//     throw new FileError()
//   }
  
//   if (stats.isFile()) {
//     try {
//        console.log('is file');
//     } catch (error) {
//         throw new FileError()
//     }
//   } else {
//     throw new FileError('File is not a folder.')
//   }
}

rename()