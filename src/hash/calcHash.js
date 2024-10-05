import { createHash } from "crypto"
import { createReadStream } from "fs"
import { dirname } from "path"
import { fileURLToPath } from "url"

const fileName = fileURLToPath(import.meta.url)
const directoryName = dirname(fileName)

const calculateHash = async () => {
  const filePath = `${directoryName}/files/fileToCalculateHashFor.txt`

  try {
    const readStream = createReadStream(filePath)
    const hash = createHash("sha256")
    readStream.pipe(hash)
    hash.on("finish", () => {
      console.log(hash.read().toString("hex"))
    })
  } catch {
    console.error("FS operation failed")
  }
}

await calculateHash()
