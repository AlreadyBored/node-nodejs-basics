import { createUnzip } from "zlib"
import { createReadStream, createWriteStream } from "fs"
import { access } from "fs/promises"
import { fileURLToPath } from "url"
import path, { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const decompress = async () => {
  const folder = path.join(__dirname, "files")
  const unzip = createUnzip()

  access(`${folder}/archive.gz`)
    .then(() => {
      const rs = createReadStream(`${folder}/archive.gz`)
      const ws = createWriteStream(`${folder}/fileToCompress.txt`)
      rs.pipe(unzip).pipe(ws)
    })
    .catch((err) => {
      throw new Error("Archive doesn't exsist")
    })
}

decompress()
