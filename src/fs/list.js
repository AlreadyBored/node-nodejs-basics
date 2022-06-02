import { readdir } from "fs/promises"
import { fileURLToPath } from "url"
import path, { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const list = async () => {
  const folder = path.join(__dirname, "files")

  readdir(folder)
    .then((list) => console.log(list))
    .catch((err) => {
      throw new Error("FS operation failed")
    })
}
