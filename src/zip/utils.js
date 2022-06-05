import { createGzip, createGunzip } from 'zlib'
import { pipeline } from 'stream'
import { createReadStream, createWriteStream } from 'fs'
import { promisify } from 'util'

export const createError = (error) => {
  if (error) {
    console.error('An error occurred:', err)
    process.exitCode = 1
  }
}

export const compressDecompressFile = async (input, output, method=true) => {
  const pipe = promisify(pipeline)
  const gzip = method ? createGzip() : createGunzip()
  const source = createReadStream(input)
  const destination = createWriteStream(output)
  await pipe(source, gzip, destination)
}
