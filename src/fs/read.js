import { readFile } from "fs/promises"
import { fileURLToPath } from "url"
import path, { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const read = async () => {
  const file = path.join(__dirname, "files", "fileToRead.txt")

  readFile(file, "utf-8")
    .then((value) => console.log(value))
    .catch((err) => {
      throw new Error("FS operation failed")
    })
}

read()
