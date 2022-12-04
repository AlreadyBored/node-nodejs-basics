import fs from "fs"
import { getFilesPath } from "../utils/index.js"

const read = async () => {
  // Write your code here
  const path = getFilesPath(import.meta.url, "fileToRead.txt")
  const readable = fs.createReadStream(path)
  readable.on("data", chunk => process.stdout.write(chunk))
}

await read()
