import path from "path"
import { fileURLToPath } from "url"
import fs from "fs/promises"
import crypto from "crypto"

const calculateHash = async () => {
  // Write your code here
  const dir = path.dirname(fileURLToPath(import.meta.url))
  const filePath = path.join(dir, "files", "fileToCalculateHashFor.txt")
  const buffer = await fs.readFile(filePath)
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer)
  const asHex = [...new Uint8Array(hashBuffer)]
    .map(h => h.toString(16).padStart(2, "0"))
    .join("")
  console.log(asHex)
}

await calculateHash()
