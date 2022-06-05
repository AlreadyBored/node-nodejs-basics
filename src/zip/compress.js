import { compressDecompressFile, createError } from './utils.js'

const FILE_TO_COMMPRESS = './files/fileToCompress.txt'
const COMPRESSES_FILE_NAME = './archive.gz'

export const compress = async () => {
  try {
    await compressDecompressFile(FILE_TO_COMMPRESS, COMPRESSES_FILE_NAME)
  } catch (error) {
    createError(error)
  }
}

compress()
