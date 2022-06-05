import { constants, access } from 'fs';
import { dirname } from 'path'
import { fileURLToPath } from 'url'
const { F_OK } = constants

export const customExist = path => new Promise (resolve => access(path, F_OK, err => resolve(!err)))

export const getFileDirName = metaUrl => new Promise ((resolve, reject) => {
  try {
    const __filename = fileURLToPath(metaUrl)
    const __dirname = dirname(__filename)
    resolve({__filename, __dirname})
  }
  catch (err) {
    reject(err)
  }
})
