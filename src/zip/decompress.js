import { compressDecompressFile, createError } from './utils.js'

const FILE_TO_DECOMMPRESS = './archive.gz'
const DECOMPRESSES_FILE_NAME = './fileToCompress.txt'

export const decompress = async () => {
  try {
    await compressDecompressFile(
      FILE_TO_DECOMMPRESS,
      DECOMPRESSES_FILE_NAME,
      false,
    )
  } catch (error) {
    createError(error)
  }
}


decompress()