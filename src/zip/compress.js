import { createGzip } from "zlib"
import { createReadStream, createWriteStream } from "fs"
import { access } from "fs/promises"
import { fileURLToPath } from "url"
import path, { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const compress = async () => {
  const folder = path.join(__dirname, "files")
  const gzip = createGzip()

  access(`${folder}/fileToCompress.txt`)
    .then(() => {
      const rs = createReadStream(`${folder}/fileToCompress.txt`)
      const ws = createWriteStream(`${folder}/archive.gz`)
      rs.pipe(gzip).pipe(ws)
    })
    .catch((err) => {
      throw new Error("File doesn't exsist")
    })
}

compress()
