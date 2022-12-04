import fs from "fs"
import * as zlib from "zlib"

const decompress = async () => {
  // Write your code here
  const base = "src/zip/files"
  const archive = `${base}/archive.gz`
  const file = `${base}/fileToCompress.txt`
  const input = fs.createReadStream(archive)
  const output = fs.createWriteStream(file)
  const decompressStream = zlib.createGunzip()
  input.pipe(decompressStream).pipe(output)
}

await decompress()
