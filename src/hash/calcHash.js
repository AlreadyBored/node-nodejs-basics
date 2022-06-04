import { createHash } from "crypto"
import { readFile } from "fs/promises"
import { fileURLToPath } from "url"
import path, { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const calculateHash = async () => {
  const file = path.join(__dirname, "files", "fileToCalculateHashFor.txt")

  readFile(file, "utf-8").then((data) => {
    const hash = createHash("sha256").update(data).digest("hex")
    console.log(hash)
  })
}

calculateHash()
