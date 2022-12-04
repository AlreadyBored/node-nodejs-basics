import fs from "fs"
import * as zlib from "zlib"
import { getFilesPaths } from "../utils/index.js"

const decompress = async () => {
  // Write your code here
  const [archive, file] = getFilesPaths(
    import.meta.url,
    "archive.gz",
    "fileToCompress.txt"
  )
  const input = fs.createReadStream(archive)
  const output = fs.createWriteStream(file)
  const decompressStream = zlib.createGunzip()
  input.pipe(decompressStream).pipe(output)
}

await decompress()
