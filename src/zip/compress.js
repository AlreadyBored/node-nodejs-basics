import fs from "fs"
import { createGzip } from "zlib"

const compress = async () => {
  // Write your code here
  const basePath = "src/zip/files"
  const file = `${basePath}/fileToCompress.txt`
  const archive = `${basePath}/archive.gz`
  const input = fs.createReadStream(file)
  const output = fs.createWriteStream(archive)
  const gzip = createGzip()
  input.pipe(gzip).pipe(output)
}

await compress()
