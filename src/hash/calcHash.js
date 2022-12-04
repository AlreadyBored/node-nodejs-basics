import fs from "fs/promises"
import crypto from "crypto"
import { getFilesPath } from "../utils/index.js"

const calculateHash = async () => {
  // Write your code here
  const filePath = getFilesPath(import.meta.url, "fileToCalculateHashFor.txt")
  const buffer = await fs.readFile(filePath)
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer)
  const asHex = [...new Uint8Array(hashBuffer)]
    .map(h => h.toString(16).padStart(2, "0"))
    .join("")
  console.log(asHex)
}

await calculateHash()
