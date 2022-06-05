import { writeFile } from "fs/promises"
import { fileURLToPath } from "url"
import path, { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const create = async () => {
  const file = path.join(__dirname, "files", "fresh.txt")

  writeFile(file, "I am fresh and young", {
    flag: "wx",
  }).catch(() => {
    throw new Error()
  })
}

create()
