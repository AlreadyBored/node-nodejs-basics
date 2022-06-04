import { createWriteStream } from "fs"
import { fileURLToPath } from "url"
import path, { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const write = async () => {
  const file = path.join(__dirname, "files", "fileToWrite.txt")

  const ws = createWriteStream(file)
  process.stdin.pipe(ws)

  process.stdin.resume()
}

write()
