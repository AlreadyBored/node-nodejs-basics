import { cp } from "fs/promises"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const copy = async () => {
  cp(__dirname + "/files", __dirname + "/files_copy", {
    recursive: true,
  }).catch((err) => {
    throw new Error("FS operation failed")
  })
}
