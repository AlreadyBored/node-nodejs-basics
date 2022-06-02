import { unlink } from "fs/promises"

import { fileURLToPath } from "url"
import path, { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const remove = async () => {
  const file = path.join(__dirname, "files", "fileToRemove.txt")

  unlink(file).catch((err) => {
    throw new Error("FS operation failed")
  })
}
