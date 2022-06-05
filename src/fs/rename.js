import fs from "fs/promises"

import { fileURLToPath } from "url"
import { dirname, join } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const rename = async () => {
  const folder = join(__dirname, "files")

  fs.rename(folder + "/wrongFilename.txt", folder + "/properFilename.md").catch(
    (err) => {
      throw new Error("FS operation failed")
    }
  )
}

rename()
