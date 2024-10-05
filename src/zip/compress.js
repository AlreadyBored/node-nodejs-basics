import { createReadStream, createWriteStream } from "fs"
import { createGzip } from "zlib"
import { dirname } from "path"
import { fileURLToPath } from "url"

const fileName = fileURLToPath(import.meta.url)
const directoryName = dirname(fileName)

const compress = async () => {
  const inputFilePath = `${directoryName}/files/fileToCompress.txt`
  const outputFilePath = `${directoryName}/files/archive.gz`
  try {
    const readStream = createReadStream(inputFilePath)
    const writeStream = createWriteStream(outputFilePath)
    const gzipStream = createGzip()
    readStream.pipe(gzipStream).pipe(writeStream)
    writeStream.on("finish", () => {
      console.log("File successfully compressed")
    })
  } catch {
    console.error("FS operation failed")
  }
}

await compress()
