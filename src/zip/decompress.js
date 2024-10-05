import fs from "fs"
import { dirname } from "path"
import { fileURLToPath } from "url"
import { createGunzip } from "zlib"

const fileName = fileURLToPath(import.meta.url)
const directoryName = dirname(fileName)

const decompress = async () => {
  const inputFilePath = `${directoryName}/files/archive.gz`
  const outputFilePath = `${directoryName}/files/fileToCompress.txt`

  const readStream = fs.createReadStream(inputFilePath)
  const writeStream = fs.createWriteStream(outputFilePath)
  const gunzipStream = createGunzip()
  readStream.pipe(gunzipStream).pipe(writeStream)
}

await decompress()
