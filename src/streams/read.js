import { createReadStream } from "fs"
import { fileURLToPath } from "url"
import path, { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const read = async () => {
  const file = path.join(__dirname, "files", "fileToRead.txt")

  const rs = createReadStream(file)
  rs.on("data", (chunk) => {
    process.stdout.setEncoding("utf-8")
    process.stdout.write(chunk)
  })
}

read()
