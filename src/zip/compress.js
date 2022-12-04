import fs from "fs"
import { createGzip } from "zlib"
import { getFilesPaths } from "../utils/index.js"

const compress = async () => {
  // Write your code here
  const [file, archive] = getFilesPaths(
    import.meta.url,
    "fileToCompress.txt",
    "archive.gz"
  )
  const input = fs.createReadStream(file)
  const output = fs.createWriteStream(archive)
  const gzip = createGzip()
  input.pipe(gzip).pipe(output)
}

await compress()
